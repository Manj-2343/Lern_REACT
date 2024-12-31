import React from "react";
import "./SideBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Category from "./Category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

const SideBar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <AiOutlineShoppingCart className="nav-icons" />
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default SideBar;
