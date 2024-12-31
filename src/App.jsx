import React, { useState } from "react";
// import Product from "./component/10project/project9/Product";
// import FomValidation from "./component/10project/project8/FormValidation";
// import { accordionData } from "./component/10project/project7/Accordiandata";
// import Accordion from "./component/10project/project7/Accordion";
// import "./app.css";
import "./index.css";
import Nav from "./component/10project/project9/Navigation/Nav";
import Products from "./component/10project/project9/products/Products";
import Recommended from "./component/10project/project9/Recommended/Recommended";
import SideBar from "./component/10project/project9/sidebar/SideBar";
import products from "./component/10project/project9/db";
import Card from "./component/10project/project9/component/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  //-------------------input filter---------------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );
  // ----------------radioFilter -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  // ----------------Buttons -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }
    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  };
  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      {/* <Counter /> */}
      {/* <Todo />  */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <Toggle /> */}
      {/* <Testimonial /> */}
      {/* <div className="accordion-container">
        {accordionData.map(({ title, content }, i) => (
          <Accordion title={title} content={content} key={i + 1} />
        ))}
      </div> */}
      {/* <FomValidation /> */}
      {/* <Product /> */}
      <SideBar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
