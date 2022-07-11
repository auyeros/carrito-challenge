
import {Pota} from '../types'

interface Props {
  potas: Array<Pota>
} 


export const ListadoProductosComponent = ({potas}: Props) => {
  
  
  return (
    
   
    <ul>
        {
          potas.map(pota => {
            return (
              <li key={pota.id}>
                <img src={pota.imagen} alt={`Imagen para ${pota.nombre}`} />
                <h4>{pota.nombre}(<small>{pota.precio}</small>)</h4>
                <h4>{pota.categoria}</h4>
                <p>{pota.descripcion?.substring(0, 100)}</p>
              </li>
            )
          })
        }
        

      </ul>
    
  );
};
