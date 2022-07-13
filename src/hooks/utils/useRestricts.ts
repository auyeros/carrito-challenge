import { useEffect, useState } from "react";
import { useCarrito } from "../../context/CarritoContext";

export const useRestricts = (id: number, precio: number, categoria: string) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const {carrito, gemas} = useCarrito();

useEffect(() => {
  // 1. 🧙‍♂️ solo tiene 3 gemas asi que solo puede comprar pociones por un total de 3 gemas.
  if (gemas < precio) {
    setIsDisabled(true);
    return;
  } else if (
  // 2. Por restricciones gubernamentales solo podemos ofrecerle comprar solo una poción de cada categoría.
  carrito.find(pota => pota.categoria === categoria)){
    setIsDisabled(true);
    return;
  } else if (
  // 3. 🧝‍♀️ la esposa de 🧙‍♂️ no nos permite venderle múltiples veces la misma poción, y no queremos averiguar que pasa si no la obedecemos.
  carrito.find(pota => pota.id === id)){
    setIsDisabled(true);
    return;
  }
  }, [carrito, gemas, precio, id, categoria])
  return {
    isDisabled,
  }


}