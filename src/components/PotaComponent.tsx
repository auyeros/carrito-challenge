type PotaProps = {
  nombre: string
  precio: number
  categoria: string
  imagen: string
  descripcion: string 
} 

export const PotaComponent = ({nombre, precio, categoria, descripcion, imagen}: PotaProps) => {
return (
<div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex items-center p-2">
                  <img className="p-4 scale-150" src={imagen} alt={`${nombre}`} />
                      <img src="./gem.png" className="scale-50 pl-2"/>
                      <h5 className="text-2xl font-bold pr-2.5">{precio}</h5>
                  <div className="px-3 pb-5">
                    <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nombre}</h4>
                    <h5 className="text-l font-bold pr-2.5">{categoria}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descripcion?.substring(0, 100)}</p>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Añadir a la bolsa</a>
                  </div>  
                </div>
)
}