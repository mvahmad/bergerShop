import { useState } from "react";
import "./App.css";
import Order from "./components/order";
import Products from "./components/products";
import orderContext from "./store/context";

function App() {
  const [allOrders, setAllOrder] = useState(0);
  const [offer, setOffer] = useState(0);
  const [wage, setWage] = useState(0);
  const [payMent, setPayMent] = useState(null);
  return (
    <orderContext.Provider
      value={{
        allOrders: allOrders,
        offer: offer,
        wage: wage,
        payMent: payMent,
      }}
    >
      <div className="App p-6 flex gap-10">
        <Order />
        <Products />
      </div>
    </orderContext.Provider>
  );
}

export default App;
