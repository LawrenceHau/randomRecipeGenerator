import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';


function DrinkIngredients(props) {
    console.log(props)
    return (
       <div>
            <header className= "IngredientsHeader">
                <h3>The required ingredients for this beverage are</h3>
            
            
            <p>{props.props[0].strMeasure1}  {props.props[0].strIngredient1}</p>
            <p>{props.props[0].strMeasure2}  {props.props[0].strIngredient2}</p>
            <p>{props.props[0].strMeasure3}  {props.props[0].strIngredient3}</p>
            <p>{props.props[0].strMeasure4}  {props.props[0].strIngredient4}</p>
            <p>{props.props[0].strMeasure5}  {props.props[0].strIngredient5}</p>
            <p>{props.props[0].strMeasure6}  {props.props[0].strIngredient6}</p>
            <p>{props.props[0].strMeasure7}  {props.props[0].strIngredient7}</p>
            <p>{props.props[0].strMeasure8}  {props.props[0].strIngredient8}</p>
            <p>{props.props[0].strMeasure9}  {props.props[0].strIngredient9}</p>
            <p>{props.props[0].strMeasure10}  {props.props[0].strIngredient10}</p>
            <p>{props.props[0].strMeasure11}  {props.props[0].strIngredient11}</p>
            <p>{props.props[0].strMeasure12}  {props.props[0].strIngredient12}</p>
            <p>{props.props[0].strMeasure13}  {props.props[0].strIngredient13}</p>
            <p>{props.props[0].strMeasure14}  {props.props[0].strIngredient14}</p>
            <p>{props.props[0].strMeasure15}  {props.props[0].strIngredient15}</p>
            </header>
        </div>
    );
}

export default DrinkIngredients;