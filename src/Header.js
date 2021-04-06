import React from 'react'
import logo from './logo.jpg'

function Header () {
    return (
        <div className="header">
            <div className="logo"><img src={logo}/></div>
            <button className="menu-toggle">menu</button>
            
        </div>
    )
}

export default Header