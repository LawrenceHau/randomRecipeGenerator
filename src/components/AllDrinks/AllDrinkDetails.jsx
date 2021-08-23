import React,{ useState, useEffect } from 'react'

function AllDrinkDetails(props) {
    console.log(props.match.params.strDrink)
    const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.match.params.strDrink}`
    const[ drinks, setDrink ]=useState([{}])
    useEffect(() => {
        fetch(url)
            .then((res)=>res.json())
            .then((json)=>{
                setDrink(json.drinks)
            })
            .catch(console.error);
        }, []);
        console.log(drinks)
        
        return (
            
            
            <div>
                 <div className='card'>
                 <div className='card-image'>
    <img class="DrinkImage"  src={drinks[0].strDrinkThumb}>
    </img>
    </div>
    <h1>{drinks[0].strDrink}</h1>
    </div>
    <div className="ingredients">
    <h3 className="RandomDrinkInstructions">The required ingredients for this beverage are</h3>
    <span className="IngredientsHeader">
    <p>{drinks[0].strMeasure1}  {drinks[0].strIngredient1}</p>
    <p>{drinks[0].strMeasure2}  {drinks[0].strIngredient2}</p>
    <p>{drinks[0].strMeasure3}  {drinks[0].strIngredient3}</p>
    <p>{drinks[0].strMeasure4}  {drinks[0].strIngredient4}</p>
    <p>{drinks[0].strMeasure5}  {drinks[0].strIngredient5}</p>
    <p>{drinks[0].strMeasure6}  {drinks[0].strIngredient6}</p>
    <p>{drinks[0].strMeasure7}  {drinks[0].strIngredient7}</p>
    <p>{drinks[0].strMeasure8}  {drinks[0].strIngredient8}</p>
    <p>{drinks[0].strMeasure9}  {drinks[0].strIngredient9}</p>
    <p>{drinks[0].strMeasure10}  {drinks[0].strIngredient10}</p>
    <p>{drinks[0].strMeasure11}  {drinks[0].strIngredient11}</p>
    <p>{drinks[0].strMeasure12}  {drinks[0].strIngredient12}</p>
    <p>{drinks[0].strMeasure13}  {drinks[0].strIngredient13}</p>
    <p>{drinks[0].strMeasure14}  {drinks[0].strIngredient14}</p>
    <p>{drinks[0].strMeasure15}  {drinks[0].strIngredient15}</p>

    </span>
    
    <header className= "IngredientsHeader">
    <h3>Instructions</h3>
    <p>{drinks[0].strInstructions}</p>
    </header>
    </div>
</div>
    )
}

export default AllDrinkDetails;