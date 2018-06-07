import React, { Component } from "react";
import { Link } from "react-router-dom";

const ShopPage = ({ inventory, match, category }) => (
  <div>
    <h3 className="text--color1">
      {category}
    </h3>
    <div class="shopPage--container">
      {inventory.map((item, i) => (
        <Link to={`${match.url}/${i}`}>
          <div class="windows--neon">
            <p>
              {item.brand} {item.model}
            </p>
            <p>{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default ShopPage;
