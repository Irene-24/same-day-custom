import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";


         

const navItem = props => {


  return (
    
        <li className={classes.NavItem}>
            <NavLink
                to={props.text}
                exact={props.exact}
                activeClassName={classes.Active}>

                 <img src={props.icon} alt="menu item icon" />

                <span> {props.text}</span>

              
            </NavLink>
        </li>
    
  );
};

export default navItem;
