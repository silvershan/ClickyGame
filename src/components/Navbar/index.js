//Sets up Navbar component
import React from "react";
import "./style.css";

const Title = props => (
  <nav class="navbar navbar-light bg-light">
    <div className="scores">
      Score: {props.score}
    </div>
  </nav>
);

export default Title;