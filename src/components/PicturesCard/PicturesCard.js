import React from "react";
import "./PicturesCard.css";

function handleClick(props) {
    // props.reArrangePictures();
    props.clickedPicture(props.id);
};

function PicturesCard(props) {
    return (
        <div className="card img-container" onClick={() => handleClick(props)}>
            <img alt={props.id} src={props.image}/>
            </div> 
    )
}


export default PicturesCard