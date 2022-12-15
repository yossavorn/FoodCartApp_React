import React from "react";

import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Express Devilered to You!!</h2>
      <p>
        Choose your favorite seafood from our broad selection of available meals
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, directly from the ocean! 
      </p>
    </section>
  );
};

export default MealsSummary;