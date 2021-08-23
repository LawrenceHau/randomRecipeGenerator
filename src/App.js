import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from "./components/Header"
import Main from "./components/Main"
import DrinkList from "./components/AllDrinks/DrinkList"
import About from "./components/About"
import AllDrinkDetails from './components/AllDrinks/AllDrinkDetails';
import Background from './components/BackgroundImage/BarImage.jpg'
import { Helmet } from 'react-helmet'
import Footer from './components/Footer'


function App() {
const TITLE = "Cocktail Generator"

  return (

    <div
    className="App">
    <img src={Background} alt="bg" class="bg"></img>
      <Helmet>
      <title>{TITLE}</title>
      </Helmet>
 






      <Header />
      <Switch>

        <Route 
        exact path="/GetRandomDrink" 
        component={Main} />
        
        <Route 
        exact path="/AllDrinks" 
        component={DrinkList} />

        <Route 
        exact path="/" 
        component={About} />

        <Route path="/AllDrinks/:strDrink"
        component={AllDrinkDetails} />


      
      </Switch>
      <Footer/>
      
      





    </div>
  );
}

export default App;
