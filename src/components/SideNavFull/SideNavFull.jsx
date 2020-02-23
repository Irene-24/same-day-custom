import React from "react";
import NavItem from "../NavItem/NavItem";
import classes from "./SideNavFull.module.css";

import settings from "../../assets/img/settings.svg";

const sideNavFull = props => {

    let styles = classes.SideBar;
    if(props.isOpen)
    {
        styles  = [styles,classes.Open].join(" ");
    }
  return (
    <div className={styles}>
      <div className={classes.Close}
      onClick = {props.toggle}>
        <div></div>
        <div></div>
      </div>


      <ul className={classes.Navlist}>

        {
          props.routes.map( item => <NavItem 
            text={item.name} icon={item.icon}  /> )
        }
          
        </ul>


        <div className={classes.Settings}>
        <NavItem 
            text="settings" icon={settings}   />
      </div>

     

  
    </div>
  );
};

export default sideNavFull;
