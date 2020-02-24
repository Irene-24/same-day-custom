import React from "react";
import classes from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";

const layout = props => 
{

  
  return (
     <div className={classes.Container}>

         <header>
             <Navigation />
         </header>
         
     </div>
     
  )
};

export default layout;
