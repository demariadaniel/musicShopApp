import React, { Component } from "react";

const Cart =({className})=>(
  <div className={`cart windows--neon ${className}`}>
    <h3 className="text--color1">
      Cart
    </h3>
    <p>Subtotal: $0</p>
  </div>
)

export default Cart;