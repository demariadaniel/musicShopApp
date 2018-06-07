import React, { Component } from "react";
import { Switch, Route, Link } from "react-router";
import Shop from "./components/Shop";
import Splash from './components/Splash';
import logoA from "./logo.a.svg";
import logoB from "./logo.b.svg";
import logoC from "./logo.c.svg";
import "./styles/App.css";

class App extends Component {
  componentWillMount(){
    // axios.get('/products')
  }
  render() {
    return (
      <div className="App">
        <div className="logos--container">
          <img src={logoA} className="App-logo-A" alt="logo" />
          <img src={logoB} className="App-logo-B" alt="logo" />
          <img src={logoC} className="App-logo-C" alt="logo" />
        </div>
          <h1 className="App-title">
            Welcome to the Shop
          </h1>
          <h1 className="App-title--white">
            Welcome to the Shop
          </h1>
          <h2 className="App-title--subtitle">
            Your one stop for everything you need
          </h2>
        <div>
          <Switch>
            <Route 
              exact
              path="/"
              render={()=>(<Splash />)}
            />
            <Route
              path="/shop"
              render={routeProps => <Shop {...routeProps} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
