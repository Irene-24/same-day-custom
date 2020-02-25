import React from "react";
import classes from "./OrderList.module.css";
import Order from "../Order/Order";
import product from "../../assets/img/product.svg";
import search from "../../assets/img/magnifying-glass.svg";

const orderList = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.preTable}>
        <div className={classes.Title}>
          <img src={product} alt="" />
          <h3>Production House</h3>
        </div>

        <div className={classes.SearchSelect}>
          <select defaultValue="">
            <option value="">Categories</option>
            <option value="">Category 1</option>
          </select>

          <div className={classes.Search}>
            <img src={search} alt="" />

            <input type="text" />

            <span>X</span>
          </div>
        </div>
      </div>

      <div className={classes.TabsList}>
        <div className={classes.Tabs}>
            <div className={classes.Active}>
                <h4>All Productions</h4>
                <span>192</span>
            </div>

            <div >
                <h4>Awaiting Production</h4>
                <span>19</span>
            </div>

            <div >
                <h4>Completed</h4>
            </div>
        </div>

        <div className={classes.Btns}>
            <button className={classes.Outlined}>Print worksheet</button>

            <select defaultValue="">
            <option value="">Mark as Complete</option>
            <option value="">Category 1</option>
          </select>

            <button className={classes.Filled}>Save</button>
        </div>
      </div>
   
 <table className={classes.Table}>
     <tbody>
     <tr className={classes.Headers}>
         
    <th> <input type="checkbox"/> </th>
    <th>&nbsp; Order #</th>
    <th>Item #</th>
    <th>Details</th>
    <th>Colors</th>
    <th>Qty</th>
    <th>Print Type</th>
    <th>Delivery Time</th>
    <th>Production status</th>

  </tr>

  {
      props.list.map( order => <Order order={order} /> )
  }
 
     </tbody>
 
</table>
   
    </div>
  );
};

export default orderList;
