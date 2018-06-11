import React, { Component } from "react";

class Themes extends Component {
  render(){
    const {className} = this.props;
    return(
      <div className={`theme windows--neon ${className}`}>
        <h3 className="text--color1">
          Theme
        </h3>
        <select>
          <option>Theme 1</option>
          <option>Theme 2</option>
          <option>Theme 3</option>
        </select>
      </div>
      )
    }
}

export default Themes;