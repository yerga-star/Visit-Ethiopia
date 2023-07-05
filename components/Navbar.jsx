import React from "react";

export default function Navbar(props) {
    return (
        <nav className={props.isDarkMode ? "nav--dark" :"nav--nav"}>
            <img src="../images/logo.jpeg" className="nav--logo" />
            <h3 id="nav--title">Visit Ethiopia The Land Of Origion</h3>
            <p className="toggler--light">Light</p>
            <div
                className="toggler--slider"
             onClick={props.toggleDarkMode}
            >
                <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Dark</p>
        </nav>
    )
}