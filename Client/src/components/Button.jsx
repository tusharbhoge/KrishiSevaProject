import React from 'react';
import { NavLink } from "react-router-dom";

const Button = (props) => { 
  return (
    <div>
      <NavLink to={props.to} className={props.style}>
        {props.title}
      </NavLink>
    </div>
  );
}

export default Button;

