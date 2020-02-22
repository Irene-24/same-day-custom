import React from "react";
import classes from "./SideNav.module.css";

const sideNav = props => 
{
  return(
    <div className={classes.SideNav}>

        <div className={classes.Hamburger}>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </div>
  ) ;
};

export default sideNav;
