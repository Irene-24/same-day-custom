import React from "react";
import classes from "./Footer.module.css";

const footer = props => 
{

  
  return (
    <footer>

        <div></div>
        <div className={classes.FooterText}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquam numquam, perferendis modi accusamus harum commodi architecto sed autem sunt distinctio officia repellendus laborum deserunt rerum minima vel? Officia, quasi.
            </p>

            <a href="#">Lorem ipsum dolor sit</a>
            <a href="#">Lorem ipsum dolor sit</a>
            <a href="#">Lorem ipsum dolor sit</a>
        </div>
        <div></div>

    </footer>
     
  )
};

export default footer;
