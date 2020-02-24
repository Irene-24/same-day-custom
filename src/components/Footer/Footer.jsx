import React from "react";
import classes from "./Footer.module.css";
import apple from "../../assets/img/apple.svg";
import gplay from "../../assets/img/google-play-store.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";
import facebook from "../../assets/img/facebook.svg"

const footer = props => 
{
  
  return (
    <footer>

        <div>

            <p className={classes.FooterHead}>Download App</p>

            <a target="_blank" href="/" className={classes.Download}>
              <img src={apple} alt="appstore icon"/>
            </a>

            <a target="_blank" href="/" className={classes.Download}>
              <img className={classes.Adjust} src={gplay} alt="playstore icon"/>
            </a>


        
        </div>

        <div className={classes.FooterText}>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed sdiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            </p>

            <a href="#">Lorem ipsum dolor sit</a>
            <a href="#">Lorem ipsum dolor sit</a>
            <a href="#">Lorem ipsum dolor sit</a>
        </div>

       <div>

            <p className={classes.FooterHead}>Connect with us</p>

            <a target="_blank" href="/" className={classes.Social}>
              <img src={twitter} alt="twitter icon"/>
            </a>

            <a target="_blank" href="/" className={classes.Social}>
              <img src={facebook} alt="facebook icon"/>
            </a>

            <a target="_blank" href="/" className={classes.Social}>
              <img src={instagram} alt="instagram icon"/>
            </a>


        
        </div>

    </footer>
     
  )
};

export default footer;
