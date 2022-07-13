import { useCarrito } from "../context/CarritoContext";
import { buyPotas } from "../hooks/services/buyPotas";
import { PotaComponent } from "./PotaComponent";

export const CarritoComponent = (props:{setShowCarrito: Function}) => {
  const cerrar = () => {
    props.setShowCarrito(false)
  }
  const { carrito, removePota, resetCarrito } = useCarrito();

  const comprarPotas = async () => {
    const ordenCompra = () => {
      return carrito.map(pota => pota.id)
    }
    const idPotas = ordenCompra();

    const response = await buyPotas(idPotas);
    if (response) {
      resetCarrito();
    }}
  
  return (
      <div className="m-8 p-8 grid bg-gray-800 flex align-center"> 
        <button className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={cerrar}>Cerrar</button>
        <div className="w-100 rounded-lg dark:bg-gray-800 dark:border-gray-700 flex-row align-center content-center justify-between">
        <ul>
        {carrito.map((pota)=> (
          <li
          key={pota.id}
          className="w-100 bg-gray-600 flex flex-row align-center content-center justify-between border-b-2 border-b-gray-500"
        >
          <img
            className="inline-block mt-2 mb-2 ml-4 h-15 bg-gray-800"
            src={pota.imagen}
            alt=""
          ></img>
          <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pota.nombre}
          </p>
          <button onClick={()=> removePota(pota.id)} className="text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red:focus:ring-red-800">Vender</button>  
        </li>
        ))}
        </ul>
        
        <button disabled={ carrito.length === 0 } onClick={()=> comprarPotas()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-700 disabled:cursor-not-allowed disabled:hover:bg-gray-700 flex">Realizar Compra!</button>  
        </div>
        
    </div>
  )

};
