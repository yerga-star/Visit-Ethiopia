import React from "react";

export default function Card(props){
    
    return (
        <div className="card">
            <img src={`../images/${props.place.img}`} className="card--img"/>
            <div className="card--detail">
            <h3 className="placeName">{props.place.name} <p id="p--interest">(12345) people interested</p></h3>
            <p>{props.place.detail}</p>
            </div>
            
        </div>

              
    )
}