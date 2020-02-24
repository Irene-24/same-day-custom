import React from "react";
import {Switch,Route } from "react-router-dom";
import classes from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Orders from "../../containers/Orders";
import Footer from "../Footer/Footer";

const layout = props => 
{

  
  return (
     <div className={classes.Container}>

         <header>
             <Navigation />
         </header>


         <main className={classes.MainContent}>

            <Switch>
                <Route path="/operations" exact component={Orders}/>
                <Route path="/:id" render={ () => <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nobis quidem sapiente? Praesentium et aut blanditiis cum quisquam tenetur quaerat soluta voluptatum sit asperiores, velit reprehenderit qui commodi aperiam! Quis.</h1>}/>
            </ Switch>

         </main>

    
         <Footer />


         
     </div>
     
  )
};

export default layout;
