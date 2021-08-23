import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'




function AllDrinksA(props) {

    const [ allDrinks, setAllDrinks ] = useState([]);    useEffect(() => {

    const url= `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q`

    fetch(url) 

    .then((res) => res.json())

    .then((json) => {
            setAllDrinks(json.drinks)

        })
        
        .catch(console.error);
    }, []);
    
    return (
        <div className='container'>
    {allDrinks.map(drinkA => {

        return (
            <Link to={`/AllDrinks/${drinkA.strDrink}`} key={drinkA.strDrink}style={{textDecoration:"none"}}>
            
            <div className='card'>
                
                
                <div className='card-image'>
                    <img
                    class="DrinkImage"
                    src={drinkA.strDrinkThumb}
                    alt='Beverage' 
                    />
                </div>
                <div className='card-title'>
                    <h3>{drinkA.strDrink}</h3>
                </div>
            </div>
                </Link>
            
            
        )
    })}
    </div>
    );

    }

export default AllDrinksA;