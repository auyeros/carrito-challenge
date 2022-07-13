import { usePotas } from '../hooks/utils/usePotas';
import { PotaComponent } from './PotaComponent';




export const ListadoProductosComponent = async () => {
  const potas = await usePotas();
  
  return (
    <>
    <div className= "m-8 p-8 grid">  
      <ul className="my-4 space-y-3">
      
      </ul>    
    </div>
    </>
  );
};
