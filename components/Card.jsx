import React from "react";

export default function Card(props){
    
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card--img"/>
            <div className="card--detail">
            <h3 className="placeName">{props.name}</h3>
            <p>{props.detail}</p>
            </div>
        </div>      
    )
}