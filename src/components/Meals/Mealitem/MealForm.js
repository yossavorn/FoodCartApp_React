import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const amountRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNum = +enteredAmount;
    setIsAmountValid(true);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setIsAmountValid(false);
     

      return;
    }
    
    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>Add</button>
      {!isAmountValid && <p>Please add the valid amount(1-5)</p>}
    </form>
  );
};

export default MealForm;
