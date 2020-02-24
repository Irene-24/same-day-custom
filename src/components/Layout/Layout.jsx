import React from "react";
import classes from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const layout = props => 
{

  
  return (
     <div className={classes.Container}>

         <header>
             <Navigation />
         </header>

         <Footer />


         
     </div>
     
  )
};

export default layout;
