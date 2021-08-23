import React, { useState, useEffect } from 'react';
import DrinkInstructions from './DrinkInstructions';
import IngredientsList from './IngredientsList';




function Main(props) {

    const [ drinks, setDrinks ] = useState(null);
    const drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

function getRandomDrink(){
    fetch(drinkURL)
    .then((res) => res.json())
    .then((json)=> setDrinks(json.drinks))
    .catch(console.error)}

    useEffect(() => {

    const url= `${drinkURL}`
    fetch(url) 
    .then((res) => res.json())
    .then((json) => {
            setDrinks(json.drinks)
        })
        .catch(console.error);
    }, []);
    console.log(drinks)
    if(drinks===null){return null}else{

    return(   

<div>
    <div className='card'>
    <div className='card-image'>
    <img class="DrinkImage" src={drinks[0].strDrinkThumb}></img>
        </div>
        <div className='card-title'>
    <h1 className="DrinkName">{drinks[0].strDrink}</h1>
    <button onClick={getRandomDrink}>New Drink</button>
    </div>
    </div>
 <div className="ingredients">
        <IngredientsList
        props={drinks} />
        <DrinkInstructions
        props={drinks} />
        </div>

    </div>
    );
    
    }
}

export default Main;