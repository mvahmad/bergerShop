import { createContext } from "react";
const orderContext = createContext({
  allOrders: 0,
  offer: 0,
  wage: 0,
  payMent: null,
});
export default orderContext;
