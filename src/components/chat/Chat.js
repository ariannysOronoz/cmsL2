import React from "react";
import './index.css';

export default function Chat() {

  return (
    <div className="Chat">
      <div className="title">
        <h1 className="titleChat">Chat</h1>
        <h1 className="titleplayers">Players Online</h1>
      </div>
              
      <div className="Chating">
        <div className="columnChat">
          <div className="boxChat"></div>
            <div className="boxMsg">
            <div className="message">
              <div className="msg-btnchat">your message</div>
            </div>
            <div className="send">
              <button className="send-btnchat">send</button>
            </div>
            </div>
        </div>
                
        <div className="columnPlayer">
          <div className="players"></div>
        </div>
      </div> 
      
    </div>    
  );
};