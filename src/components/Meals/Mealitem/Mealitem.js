import React, { useContext } from "react";
import CartContext from "../../../store/CartContext";
import MealForm from "./MealForm";
import classes from "./Mealitem.module.css";

const Mealitems = (props) => {
  const itemPrice = `THB ${(props.price).toFixed(0)}`;
  const cartCTX = useContext(CartContext);
  const addCartHandler = (amount) => {
    cartCTX.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{itemPrice}</div>
      </div>
      <div>
        <MealForm onAddToCart={addCartHandler}></MealForm>
      </div>
    </li>
  );
};

export default Mealitems;
