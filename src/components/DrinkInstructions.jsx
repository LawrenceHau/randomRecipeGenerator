import React, {useState} from 'react';

function DrinkInstructions(props) {
    const [language, setLanguage]= useState("strInstructions")
    



    return (
        <div>
            <h3 className="RandomDrinkInstructions">Instructions</h3>
            <p className="RandomDrinkInstructions">{props.props[0].strInstructions}</p>
        </div>
    );
}

export default DrinkInstructions;