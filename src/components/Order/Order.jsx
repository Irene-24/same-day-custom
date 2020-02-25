import React from "react";
import classes from "./Order.module.css";

const order = props => {
    const time = new Date(props.order.time);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const second = 1,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    const difference = time.getTime() - new Date(time).getTime() ;



    const hh ="0"+ Math.floor((difference % (day)) / (hour)) ;
    const mm="0"+Math.floor((difference % (day)) / (minute)) ;
    const ss ="0"+ Math.floor((difference % (day)) / (second)) ;

    const rem = `${hh.substring(hh.length-2)}:${mm.substring(mm.length-2)}:${ss.substring(ss.length-2)}`;
 
    const date  = `${time.getUTCDate()} - ${months[time.getUTCMonth()]} - ${time.getMonth()} `
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td className={classes.Capital}>#{props.order.order}</td>
      <td className={classes.Capital}>#{props.order.item}</td>
      <td className={classes.Desc}>
        <img src={props.order.details.imageUrl} alt="product" />
        <span>{props.order.details.desc}</span>
      </td>
      <td className={classes.Color}>
        <span>{props.order.colors}</span>{" "}
      </td>
      <td className={classes.Qty}>{props.order.qty}</td>
      <td>{props.order.print}</td>
      <td className={classes.Time}>
          <p> {date}</p>
  <p> Time Left : <span >{rem}</span> </p>
         
        </td>
      <td>{props.order.status}</td>
    </tr>
  );
};

export default order;
