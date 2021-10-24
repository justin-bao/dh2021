import React from "react";
import {Link} from "react-router-dom";

function Button(props) {
  return (
    <div>
      <Link to={props.path}>
        <button 
          className={props.buttonType} 
        >
          {props.text}
        </button>
      </Link>
    </div>
  );
}

export default Button;