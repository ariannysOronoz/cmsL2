import React from "react";
import './index.css';

export default function Player({title,namebtn}){
    
    return (
        <div className="player">
            <div className="playerItem">
                <div className="title">
                    <h4>{title}</h4>
                </div>
                <div className="button">
                    <button>{namebtn}</button>
                </div>
            </div>
        </div>
    );
};