import React, { Component } from "react";
import { Switch, Route, Link } from "react-router";
import Shop from "./components/Shop";
import Splash from './components/Splash';
import { Logo } from "./components/Logo";
import "./styles/App.css";
import {HTML, colorB, colorE, colorG} from './utils/colors';
    

class App extends Component {
  state = {
    colors: [colorB, colorE, colorG]
  }
  componentWillMount(){
    // axios.get('/products')
  }
  render() {
    console.log(colorB(), colorE(), colorG())
    return (
      <div className="App">
        <div className="logos--container">
          <Logo className="App-logo-A" fill={colorB()} />
          <Logo className="App-logo-B" fill={colorE()} />
          <Logo className="App-logo-C" fill={colorG()} />
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
