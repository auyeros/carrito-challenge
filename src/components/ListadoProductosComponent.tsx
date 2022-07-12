
import {Pota} from '../types'
import { PotaComponent } from './PotaComponent';
interface Props {
  potas: Array<Pota>
} 



export const ListadoProductosComponent = ({potas}: Props) => {
  
  
  return (
    <>
    <div className= "m-8 p-8 grid">  
      <ul className="my-4 space-y-3">
        {
          potas.map(pota => {
            return (
              <li key={pota.id}>
                <PotaComponent {...pota} />
              </li>
              )
            })
        }        
      </ul>    
    </div>
    </>
  );
};
