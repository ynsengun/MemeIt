import React from "react";
import "./App.css"

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <button className="logo">Meme Generator</button>
            </div>
        )
    }
}

export default Header;