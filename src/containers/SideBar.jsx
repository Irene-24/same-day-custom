import React, {Component} from "react";
import SideNav from "../components/SideNav/SideNav";
import SideNavFull from "../components/SideNavFull/SideNavFull";


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
                  name:"dashboard"
              },
              {
                  name:"operations"
              },
              {
                  name:"records"
              },
              {
                  name:"supply store"
              },
              {
                  name:"market place"
              },

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