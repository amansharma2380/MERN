import React from "react";
import "/Header.css";
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className = "app-header">
        <h4>My application</h4>
        <ul>
            <li>
                <Link to="/">Home</Link> 
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
        </div>
    );
}

export default Header;