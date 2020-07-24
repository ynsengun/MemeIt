import React from "react";
import "./App.css"

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="logo-container">
                    <button className="logo">Meme Generator</button>
                </div>
            </div>
        )
    }
}

export default Header;