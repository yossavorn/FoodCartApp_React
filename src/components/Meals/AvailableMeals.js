import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import Mealitems from "./Mealitem/Mealitem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://meals-react-e991f-default-rtdb.asia-southeast1.firebasedatabase.app/Meal.json"
        );
        const responseData = await response.json();
        const fetchMeal = [];
        for (let key in responseData) {
          fetchMeal.push({ ...responseData[key], id: key });
        }
        setMeals(fetchMeal);
      } catch (error) {
        console.log(error.message);
      }
      
    };
    fetchData();
  }, []);

  const DUMMY_DISH = meals.map((dishes) => (
    <Mealitems
      name={dishes.name}
      description={dishes.description}
      price={dishes.price}
      id={dishes.id}
      key={dishes.id}
    ></Mealitems>
  ));
  return (
    <div className={classes.meals}>
      <Card>
        <ul>{DUMMY_DISH}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
