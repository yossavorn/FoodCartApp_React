import React from "react";

const CartContext = React.createContext({
  items: [],
  Amount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
