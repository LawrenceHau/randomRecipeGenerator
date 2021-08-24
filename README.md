# Random Recipe Generator

<p>
<img src="./src/z.png" width="800">
</p>
This is an application that I created using React, and CocktailDB to make API calls. Click Get Random Drinks to generate a random drink, or if you would like to search for a specific drink click All Drinks on the NavBar.

# App.js

imports App.Css for styling

imports React to use React

uses `{Helmet}` from ReactHelmet to create title

imports `{Route, Switch}` from react-router-dom to route to seperate paths, and switch between in different components

imports Header, Main, Drinklist, About, AllDrinkDetails to use Route and Switch to switch between each component using navbar, also paths /AllDrink:strDrink to path to seperate drink links when a drink is clicked.

imports Background to set the background of the application

imports Footer to display navbar footer that links to github.

---

# GetRandomDrink

## Header

creates `div` with the className of title to style the `h1` title text of "Cocktail Generator"

creates a `nav` that uses `<Link>` to link to Home, AllDrinks, and About

Get Random Drink to `/GetRandomDrink`

All Drinks links to `/AllDrinks/`

About links to `/`

---

## Main

import `{useState, useEffect} to fetch drinks from CocktailDB

import IngredientsList from to pull the information for the ingredients, and display.

import DrinkInstructions to pull the information to creating the random drink

creates a `function getRandomDrink()` to fetch a new drink

Uses [Cocktail DB API](https://www.thecocktaildb.com/api/json/v1/1/random.php) to pull a random drink from cocktailDB

returns a `div` containing a `div` with the className of card to create styling of a card containing a `div` with the className of card-image to style the card image within the card. The drink title is created within the button with `h1` with a className of card-title to style the title, and a `button` is created below it with the `onClick` function of `{getRandomDrink}`

the card includes an `img` which contains a `src` that contains the image for the drink that was called.

creates a `div` with className ingredients that creates styling that calls `<IngredientsList>` and `<DrinkInstructions>` with the props of `{drinks}`

---

## IngredientsList

Creates `<header>` with a className of IngredientsHeader to style the text within `<h3>` to display the text, as well as `p` to relay the info from the GetRandomDrinks api call using `{props.props[0].strMeasure}` and `{props.props[0].strIngredients}`

## Drink Instructions

creates `h3` and `p` holding the text "Instructions" as well as calling `{{props.props[0].strInstructions}` to display the drink instructions from the GetRandomDrink API call in Main

---

## About

`div` given a class name of ingredients to use the same styling from ingredients to create a `p` text that tells you the use of the application

# Components

## All Drinks A-Z

creates a `const [allDrinks, setAllDrinks] = useState([])` to display an array for each drink

Uses `useEffect(()=>)` to call [Cocktail DB API](https://www.thecocktaildb.com/api.php) for each drink

Maps each drink for each letter based on component

uses `<Link>` to /AllDrinks/ for the route in App.js

returns a `div` with the className of card containing two other `div` one with the className of card-image which displays the drink image with `src=DrinkA.strDrinkThumb` and one with a className of card-title containing an `h3` that displays the information of `{drinkA.strDrink}`

---

## AllDrinkDetails

Uses TheCocktailDB's api to call the information for each drink clicked in the `{allDrinks}` route

Uses props.match.params.strDrink to GET the information from the drink that you would like to GET the inforamation from by using useState.

Uses `<div>` with the className card containing `div` with the className card-image to create the styling for the drink card and image as well as an `h1` that calls `{drinks[0].strDrink}`.

Below that is a seperate `div` with the className of ingredients to style the placement of the ingredients, and the instructions.

An `<h3>` is included with the className of RandomDrinkInstructions to style the text of the instructions.

Below it is a `header` with a className of IngredientsHeader to create an opaque box that holds the `h3` Instructions text as well as a multiple `p` which calls the instructions from the API.

---
