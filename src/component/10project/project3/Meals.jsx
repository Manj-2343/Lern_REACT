import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => response.json())
      .then((data) => setItems(data.meals));
  }, []);

  const itemList =
    items &&
    items.map(({ strMeal, strMealThumb, idMeal }) => {
      return (
        <section key={idMeal} className="my-meal-section">
          <img src={strMealThumb} alt={strMeal} className="image" />
          <section className="description-section">
            <p>{strMeal}</p>
            <p>{idMeal}</p>
          </section>
        </section>
      );
    });

  return <div className="meal-container">{itemList}</div>;
};

export default Meals;
