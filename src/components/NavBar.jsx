import React from 'react'
import { ReactComponent as ReactSVG } from '../assets/react.svg'
import "./NavBar.css"

function NavBar({ isLoggedIn }) {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/" className="navbar-item navbar-logo"><ReactSVG /><span>TikTok Helper</span></a>
            </div>
            <div className="items">
                {isLoggedIn && <>
                    <button className="navbar-item">Item 1</button>
                    <button className="navbar-item">Item 2</button>
                </>}

            </div>

            <div className="user">
                {isLoggedIn && <>  <button className="navbar-item navbar-user">User</button> </>}
            </div>

        </div>
    )
}

export default NavBar