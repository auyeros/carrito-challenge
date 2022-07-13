import { useState, useEffect } from "react";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";
import { CarritoProvider, useCarrito } from "./context/CarritoContext"


function App() {
  const [showCarrito, setShowCarrito] = useState<boolean>(false)
  

  return (
    <CarritoProvider>
    <div className="min-h-full bg-fixed" style={{ backgroundImage: "url(background.webp)" }}>
      <HeaderComponent />
      <div className="flex justify-center min-h-full">
        <div className="max-w-lg w-full py-16">
        <ListadoProductosComponent />
        </div>
      </div>
    </div>
    </CarritoProvider>
  );
}

export default App;
//* 