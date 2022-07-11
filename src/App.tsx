import { useState, useEffect } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";
import { getAllPotas } from "./services/getAllPotas";
import {Pota, PotasFromBack} from './types'

interface AppState {
  potas: Array<Pota>
  showCarrito: boolean
}



function App() {
  const [potas, setPotas] = useState<AppState["potas"]>([])
  const [showCarrito, setShowCarrito] = useState<AppState["showCarrito"]>(false);
  
  useEffect(() => {
    
    getAllPotas().then(setPotas)}
  , [])
  
  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent />
      <div className="flex justify-center min-h-full">
        <div className="max-w-lg w-full py-16">
        <h1>Listado de Potas</h1>
        <ListadoProductosComponent potas={potas}/>
        

      
        </div>
      </div>
    </div>
  );
}

export default App;
//* {showCarrito ? <CarritoComponent /> : }