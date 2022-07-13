import { useState } from "react";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";
import { CarritoProvider } from "./context/CarritoContext"
import { CarritoComponent } from "./components/CarritoComponent";


function App() {
  const [showCarrito, setShowCarrito] = useState(false)
  

  return (
    <CarritoProvider>
    <div className="min-h-full bg-fixed" style={{ backgroundImage: "url(background.webp)" }}>
      <HeaderComponent setShowCarrito={setShowCarrito} />
      <div className="flex justify-center min-h-full">
        <div className="max-w-lg w-full py-16">
        {showCarrito ? <CarritoComponent setShowCarrito={setShowCarrito}/> : <ListadoProductosComponent />}
        </div>
      </div>
    </div>
    </CarritoProvider>
  );
}

export default App;
//* 