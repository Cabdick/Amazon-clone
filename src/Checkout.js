import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
          alt=""
        />

        <div className="checkout__title">
          <h2 className="checkout__list">Your Shopping Basket</h2>
          {/* Checkout Product */}
          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
        </div>
      </div>

      <div className="Checkout__right">
        <Subtotal />
        <h2>the subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
