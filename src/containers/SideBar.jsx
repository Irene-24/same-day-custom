import React, {Component} from "react";
import SideNav from "../components/SideNav/SideNav";
import SideNavFull from "../components/SideNavFull/SideNavFull";

import dashboard from "../assets/img/dashboard.svg";
import timeLeft from "../assets/img/time-left.svg";
import file from "../assets/img/file-1.svg";
import cart from "../assets/img/shopping-cart-2.svg";
import pile from "../assets/img/box-pile.svg";
import chat from "../assets/img/chat.svg";


class SideBar extends Component
{

    constructor(props)
    {
      super(props);
     
      this.state =
      {
          open:false,
          active:1,
          routes:
          [
              {
                  name:"dashboard",
                  icon:dashboard
              },
              {
                  name:"operations",
                  icon:timeLeft
              },
              {
                  name:"records",
                  icon:file
              },
              {
                  name:"supply store",
                  icon:cart
              },
              {
                  name:"market place",
                  icon:pile
              },       
              {
                name:"forums",
                icon:chat
            }

          ]
      }
    }

    toggleSideBar = () =>
    {
        const open = !this.state.open;
        this.setState({ open : open });
    }
    

    render()
    {
        return (
        <>
           <SideNav 
           toggle = {this.toggleSideBar} />
           <SideNavFull 
           routes={this.state.routes} 
           isOpen={this.state.open}
           toggle = {this.toggleSideBar}/>
        </>
        );
    }

}

export default SideBar;