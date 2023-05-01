import React from "react";
import './index.css';
import { Link } from 'react-router-dom';

export default function Home() {

    return (

        <div className="allChat">
            <div className="titleChat"><h1>Chat</h1></div>
            <div className="detailChat">
              <div className="detailColumn1">
                <div className="column1 -box">
                    <div className="chat -box"></div>
                    <div className="msg -box">
                        <div className="msg -box-chat">Your message</div>
                        <div className="send -box-chat">
                            <button className="send -btn-chat">send</button>
                        </div>
                    </div>
                </div>
                <div className="column2 -box">
                    <div className="users">
                        <div className="players -online"></div>
                    </div>
                </div>
              </div>
            </div> 
        </div>
            
    );
};