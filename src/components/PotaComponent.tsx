import { useCarrito } from "../context/CarritoContext"
import { useRestricts } from "../hooks/utils/useRestricts";

type PotaProps = {
  pota: Potas;
} 

export const PotaComponent = ({pota}: PotaProps) => {
  const {id, nombre, precio, categoria, descripcion, imagen } = pota;
  
  const {addPota} = useCarrito();
  const {isDisabled} = useRestricts(id, precio, categoria);
  return (
  <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex items-center p-2">
    <img className="p-4 scale-150" src={imagen} alt={`${nombre}`} />
      <div className="px-3 pb-5 flex-column">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nombre}</h4>
        <h5 className="text-l font-bold pr-2.5">{categoria}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descripcion?.substring(0, 100)}</p>
        <div className="flex">
          {isDisabled === false ? (
            
          <button disabled={isDisabled} onClick={()=> addPota(pota)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Añadir a la bolsa</button>  
           
          ) : (
            <div className="flex flex-col gap-3" >
            <button className="text-white bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray:focus:ring-gray-800">No puedo man</button>
           </div>

        )}  
        </div>
      </div>  
      <img src="./gem.png" className="scale-50 pl-1.5"/>
      <span className="text-l font-bold pr-2.5">{precio}</span>
  </div>
)
}