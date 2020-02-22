import React from "react";
import classes from "./SideNavFull.module.css";
// import dashboard from "../../assets/img/dashboard.svg";
// import timeLeft from "../../assets/img/time-left.svg";
// import file from "../../assets/img/file-1.svg";
// import cart from "../../assets/img/shopping-cart-2.svg";
// import pile from "../../assets/img/box-pile.svg";
// import chat from "../../assets/img/chat.svg";
// import settings from "../../assets/img/settings.svg";

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

      <hr/>

  
    </div>
  );
};

export default sideNavFull;
