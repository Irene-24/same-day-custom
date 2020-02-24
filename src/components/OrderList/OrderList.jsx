import React from "react";
import classes from "./OrderList.module.css"
import {Link} from "react-router-dom";

const orderList = props => 
{

  
  return (
     <div className={classes.Container}>

     {props.list[0].order}
         
     </div>
     
  )
};

export default orderList;
