import { useCarrito } from "../context/CarritoContext";
import { PotaComponent } from "./PotaComponent";





export const ListadoProductosComponent = () => {
  const {potas} = useCarrito();

  
  return (
    <>
    <div className= "m-8 p-8 grid">  
      <ul className="my-4 space-y-3"> 
      {potas.map(pota => (
        <PotaComponent key={pota.id} pota={pota} />))}
      </ul>    
    </div>
    </>
  );
};
