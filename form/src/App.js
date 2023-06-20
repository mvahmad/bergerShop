import "./App.css";
import Order from "./components/order";
import Products from "./components/products";

function App() {
  return (
    <div className="App p-6 flex gap-10">
      <Order />
      <Products />
    </div>
  );
}

export default App;
