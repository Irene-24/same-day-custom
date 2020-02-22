import React, {Component} from "react";

class SideBar extends Component
{

    constructor(props)
    {
      super(props);
     
      this.state =
      {
          category:"business"
      }
    }
    

    render()
    {
        return <h1>Sidebar</h1>
    }

}

export default SideBar;