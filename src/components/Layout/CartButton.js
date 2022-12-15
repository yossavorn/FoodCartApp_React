import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/CartContext";

const CartButton = (props) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const CartCTX = useContext(CartContext);
  const {items} = CartCTX
  const itemNum = items.reduce((accNum, item) => {
    return accNum + item.amount;
  }, 0);
  const btnClass = `${classes.button} ${isAnimated ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length ===0){
      return
    }
    setIsAnimated(true);
    const timer = setTimeout(() => {
      setIsAnimated(false)
    }, 100);
    return () => {
      clearTimeout(timer)
    }
  }, [items]);
  return (
    <button className={btnClass} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemNum}</span>
    </button>
  );
};

export default CartButton;
