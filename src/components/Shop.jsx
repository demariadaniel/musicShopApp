import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Amps from "../data/Amps";
import Guitars from "../data/Guitars";
import Effects from "../data/Effects";
import Cart from './Cart';
import ShopPage from "./ShopPage";
import ItemDetails from "./ItemDetails";

export default class Shop extends Component {
  state = {
    products: [Amps, Guitars, Effects]
  };
  render() {
    const {match} = this.props;
    return (
      <div>
        <nav className="windows--neon">
          {this.state.products.map(product => (
            <Link to={`${match.url}/${product.category}`}>
              <button>{product.category}</button>
            </Link>
          ))}
        </nav>
        <div className="shopPage--parent windows--neon">
          <Switch>
            {this.state.products.map(product => (
              <Route
                exact
                path={`${match.url}/${product.category}`}
                render={routeProps => <ShopPage {...routeProps} {...product} />}
              />
            ))}
            {this.state.products.map(product => (
              <Route
                path={`${match.url}/${product.category}/:itemIndex`}
                render={routeProps => (
                  <ItemDetails
                    {...routeProps}
                    category={product.category}
                    item={
                      product.inventory[
                        routeProps.match.params.itemIndex
                      ]
                    }
                  />
                )}
              />
            ))}
          </Switch>
        </div>
        <Cart />
      </div>
    );
  }
}
