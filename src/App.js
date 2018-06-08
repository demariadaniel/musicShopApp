import React, { Component } from "react";
import { Switch, Route, Link } from "react-router";
import Shop from "./components/Shop";
import Splash from './components/Splash';
import { Logo } from "./components/Logo";
import "./styles/App.css";
const color1 = "darkblue";
const color2 = "darkmagenta";
const color3 = "deeppink";

class App extends Component {
  componentWillMount(){
    // axios.get('/products')
  }
  render() {
    return (
      <div className="App">
        <div className="logos--container">
          <Logo className="App-logo-A" fill={color1} />
          <Logo className="App-logo-B" fill={color2} />
          <Logo className="App-logo-C" fill={color3} />
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
