import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Cartitem from "./CartItem";

const Cart = (props) => {
  const cartCTX = useContext(CartContext);
  const hasItem = cartCTX.items.length > 0;

  const addItemHandler = (item) => {
    item = {
      ...item,
      amount:1
    }
    cartCTX.addItem(item)
  };

  const removeItemHandler = (item) => {
    
    cartCTX.removeItem(item)
  };


  
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCTX.items.map((items) => (
        <Cartitem
          key={items.id}
          name={items.name}
          price={items.price}
          amount={items.amount}
          onAdd={() => addItemHandler(items)}
          onRemove={() => removeItemHandler(items.id)}
        ></Cartitem>
      ))}
    </ul>
  );
  
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>THB {cartCTX.amount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order Now</button>}
      </div>
    </Modal>
  );
};

export default Cart;
