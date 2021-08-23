import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import github from './GitHub-Mark-32px.png'
import linkedIn from './LI-In-Bug.png'
function header(props) {
    return (
        <div>
            <header>
                
                <div  className = "title"><h1>Cocktail Generator</h1></div>
                <nav className="DefaultNavBar">
                    
                    <span className = "headerLinks">
                        <Link style={{textDecoration:"none", color:"White"}} to="/GetRandomDrink"><h2 className="HeaderH">Random Drinks</h2></Link>
                        <br></br>
                        <Link style={{textDecoration:"none", color:"White"}} to="/AllDrinks/"><h2 className="HeaderH">All Drinks</h2></Link>
                        <br></br>
                        <Link style={{textDecoration:"none", color:"White"}} to="/"><h2 className="HeaderH">About</h2></Link>
                        
                    </span>
                </nav>
                
                
            </header>
        </div>
    );
}

export default header;