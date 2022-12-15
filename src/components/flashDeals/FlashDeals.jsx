import React from "react";
import FlashCard from "./FlashCard";

const FlashDeals = ({productItems,addToCart,cartItem}) => {
  return (
    <section className="flash background">
      <div className="container ">
        <div className="heading f_flex">
          <i className="fa fa-bolt"></i>
          <h1>FlashDeals</h1>
         
        </div>
        <FlashCard productItems={productItems} addToCart={addToCart} cartItem={cartItem}/>
      </div>
    </section>
  );
};

export default FlashDeals;
