import React from "react";
import "./Modal.css";

function Modal() {
    return (
        <div className="introM">
            <div className="introContent">
                <h3 className="center">How to Play!</h3>
                <ol>    
                    <li>Select an image to start up the game.</li>
                    <li>Don't travel to the same garden twice or its game over.</li>
                    <li>If you visit all of the gardens, without a repeat trip you win!</li>
                </ol>
            </div>
            <br />

        </div>
    )
}

export default Modal;