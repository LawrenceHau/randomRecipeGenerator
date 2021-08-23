import React from 'react';
import Link from 'react-router-dom'
import { ExternalLink } from 'react-external-link';
import github from './GitHub-Mark-32px.png'
import linkedIn from './LI-In-Bug.png'
function Footer(props) {

 
    return (
        
        <div>
            <nav className="Links">
                <a href="https://github.com/LawrenceHau"><img src={github}></img></a>
                <a href="https://www.linkedin.com/in/lawrencechristopherhau/"><img className="LinkedIn" src={linkedIn}></img></a>
            </nav>
        </div>
    );
}

export default Footer;