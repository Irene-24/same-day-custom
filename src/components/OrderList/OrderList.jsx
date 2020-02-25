import React from "react";
import classes from "./OrderList.module.css";
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
                <h4>AwaitingProductions</h4>
                <span>192</span>
            </div>

            <div >
                <h4>Completed</h4>
                <span></span>
            </div>
        </div>

        <div className={classes.Btns}></div>
      </div>
    </div>
  );
};

export default orderList;
