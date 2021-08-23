import React, {useState} from 'react';

function DrinkInstructions(props) {
    const [language, setLanguage]= useState("strInstructions")
    

    function langButtonHandler(e){
        e.preventDefault();
        setLanguage({...language, [e.target.name]:e.target.value})
        

    }

    return (
        <div>

            
            <h3 className="RandomDrinkInstructions">Instructions 
            
            <button 
            name="strInstructions"
            onClick={langButtonHandler}
            >English
            </button>

            <button 
            name="strInstructionsDE"
            onClick={langButtonHandler}
            >Deutsche
            </button>

            <button 
            name="strInstructionsIT"
            onClick={langButtonHandler}
            >Italiano
            </button></h3>
            <p className="RandomDrinkInstructions">{props.props[0].strInstructions}</p>
            

        </div>
    );
}

export default DrinkInstructions;