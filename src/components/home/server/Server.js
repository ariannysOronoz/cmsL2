import React from "react";
import './index.css';

export default function Server (
    {
        title, 
        disconnet, 
        reboot, 
        block
    }
)
{
    return (
        <div className="server">
            <div className="gameAndLogin">
                
                <div className="title">
                    <h4>{title}</h4>
                </div>
                
                <div className="button">
                    <button>{disconnet}</button>
                    <button>{reboot}</button>
                    {block!==undefined &&
                        <button>{block}</button>
                    }
                </div>
            
            </div>
        </div>
    );
};