import React, {Component} from "react";
import SideNav from "../components/SideNav/SideNav";

class SideBar extends Component
{

    constructor(props)
    {
      super(props);
     
      this.state =
      {
          open:false,
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
    

    render()
    {
        return (
        <>
           <SideNav routes={this.state.routes} />
        </>
        );
    }

}

export default SideBar;