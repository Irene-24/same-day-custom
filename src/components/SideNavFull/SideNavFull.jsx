import React from "react";
import classes from "./SideNav.module.css";
import dashboard from "../../assets/img/dashboard.svg";
import timeLeft from "../../assets/img/time-left.svg";
import file from "../../assets/img/file-1.svg";
import cart from "../../assets/img/shopping-cart-2.svg";
import pile from "../../assets/img/box-pile.svg";
import chat from "../../assets/img/chat.svg";
import settings from "../../assets/img/settings.svg";

const sideNavFull = props => {
  return (
    <div className={classes.SideNav}>
      <div className={classes.Hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={classes.Navlist}>
        <li>
          <img src={dashboard} alt="dashboard icon" />
        </li>

        <li className={classes.Active}>
          <img src={timeLeft} alt="time left icon" />
        </li>

        <li>
          <img src={file} alt="file icon" />
        </li>

        <li>
          <img src={cart} alt="shopping cart icon" />
        </li>

        <li>
          <img src={pile} alt="pile of boxes icon" />
        </li>

        <li>
          <img src={chat} alt="chat icon" />
        </li>


      </ul>

      <div className={classes.Settings}>
        <img src={settings} alt="settings icon" />
      </div>
    </div>
  );
};

export default sideNavFull;
