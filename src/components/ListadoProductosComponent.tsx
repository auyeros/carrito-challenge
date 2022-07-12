
import {Pota} from '../types'
interface Props {
  potas: Array<Pota>
} 


export const ListadoProductosComponent = ({potas}: Props) => {
  
  
  return (
    <ul className="my-4 space-y-3">
        {
          potas.map(pota => {
            return (
              <li key={pota.id}>
                <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex items-center">
                  <img className="p-8 rounded-t-lg" src={pota.imagen} alt={`${pota.nombre}`} />
                  <div className="px-5 pb-5">
                    <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pota.nombre}</h4>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{pota.categoria}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{pota.descripcion?.substring(0, 100)}</p>
                    <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${pota.precio}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Añadir a la bolsa</a>
        </div>
                  </div>  
                </div>
              </li>
              
            )
          })
        }        
    </ul>    
  );
};
