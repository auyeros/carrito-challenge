import { createContext, useContext, ReactNode, useState } from "react";

type CarritoProviderProps = {
  children: ReactNode
}

interface Context {
  gemas: number;
  carrito: Potas[];
  quantity: number;
  addPota: (pota: Potas) => void;
  removePota: (potaId: number) => void;
}

const CarritoContext = createContext({} as Context)

export function useCarrito() {
return useContext(CarritoContext)
}


export function CarritoProvider({ children }: CarritoProviderProps) {
  const carrito = useProviderCarrito();

  return (
    <CarritoContext.Provider 
    value={
      carrito}>
    {children}
    {/* <CarritoComponent /> */}
  </CarritoContext.Provider>
  )
}

const useProviderCarrito = () => {
  const [carrito, setCarrito] = useState<Potas[]>([]);
  const [gemas, setGemas] = useState<number>(3);
  const [quantity, setQuantity] = useState<number>(0);

  const addPota = (pota: Potas) => {
    const newCarrito = [...carrito, pota];
    setCarrito(newCarrito);
    setQuantity(quantity + 1)
    setGemas(gemas - pota.precio);
  }

  const removePota = (potaId: number) => {
    const pota = carrito.find(pota => pota.id === potaId);
    const newCarrito = carrito.filter(pota => pota.id !== potaId);
    const newSaldo = gemas + (pota as Potas).precio;
    
    setCarrito(newCarrito);
    setQuantity(quantity - 1);
    setGemas(newSaldo);
  }

  return {
    carrito,
    gemas,
    quantity,
    addPota,
    removePota
  }
}