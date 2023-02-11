import React from "react";
import img from  './React-Logo.png'

function Nav() {
    return(
        <div>
            <nav className="navbar">
            <img className="logo"
                alt="React-logo" 
                src={img}
                />
                
                <h2>ReactFacts</h2>

                <h4>Learn React From Sratch</h4>
            </nav>
        </div>
    )
}

export default Nav;