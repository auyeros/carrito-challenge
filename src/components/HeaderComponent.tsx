import { useCarrito } from "../context/CarritoContext";


export const HeaderComponent = (props: {setShowCarrito: Function}) => {
  const { gemas, quantity } = useCarrito()
  const verBolsa = () => {
    props.setShowCarrito(true);
  };
  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img alt="" src="./gem.png" />
        <span>{gemas} Gemas</span>
      </div>
    <button onClick={verBolsa} className="text-white hover:underline position:relative">Ver Bolsa ({quantity})</button>
    </div>
  );
};
