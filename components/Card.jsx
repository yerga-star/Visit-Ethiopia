import React from "react";

export default function Card(props) {

    return (
        <div className={props.isDarkMode ? "container--dark":"container"}>
            <div className="container-child">
                <div className="child-inner">
                    <img src={`../images/${props.place.img}`} />
                </div>
                <div className="child-inner">
                    <h3 className="placeName">{props.place.name} <p id="p--interest">(12345) people interested</p></h3>
                    <p>{props.place.detail}</p>
                </div>
            </div>
        </div>


    )
}