import React from "react";
import "./PicturesCard.css";

const PicturesCard = props => (

    <div className="card">
        <div className="img-container">
            <img alt={props.id} src={props.image}/>
        </div>
    </div>

       
        
);

export default PicturesCard;