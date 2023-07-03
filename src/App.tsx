import gelatoData from "./data";
import Gelato from "./components/Gelato";
const App = () => {
  const renderedGelatos = gelatoData.map((gelato) => (
    <Gelato key={gelato.name} {...gelato} />
  ));
  return (
    <>
      <h1>Gelato Shop</h1>
      {renderedGelatos}
    </>
  );
};

export default App;
