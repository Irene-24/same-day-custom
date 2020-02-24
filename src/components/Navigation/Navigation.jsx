import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../../assets/img/desktop logo optimized.svg";
import mail from "../../assets/img/mail.svg";
import user from "../../assets/img/marius.jpg";
import cart from "../../assets/img/shopping-cart.svg";

class  Navigation extends Component
{
    state = 
    {
        isOpen : false
    };

    toggleNav = () =>
    {
        const isOpen = !this.state.isOpen;
        this.setState({isOpen});
    }

    render()
    {
        const styles = this.state.isOpen ? [classes.RightNav,classes.Active].join(" ") : classes.RightNav;
        return (
            <nav className={classes.Navbar}>
                <div 
                onClick={this.toggleNav}
                className={classes.NavMenu}>
        
                    <div></div>
                    <div></div>
                    <div></div>
        
                </div>
              <img className={classes.Logo} src={logo} alt="company logo" />
        
              <div  className={styles}>
                <ul className={classes.NavLinks}>
                  <li>
                    <NavLink to="" >
                      <img src={mail} alt="message icon" />
                      <span>Message</span>
                    </NavLink>
                  </li>
        
                  <li>
                    <NavLink to="" >
                      <img src={cart} alt="cart icon" />
                      <span>Market Place</span>
                    </NavLink>
                  </li>
        
                  <li>
                    <NavLink to="" >
                      <img src={mail} alt="message icon" />
                      <span>Notifications</span>
                    </NavLink>
                  </li>
                </ul>
        
                <div className={classes.Avatar}>
                    
                    <img src={user} alt="avatar of user" />
                    <span>Me</span>
                </div>
              </div>
            </nav>
          );
    }
}


export default Navigation;
