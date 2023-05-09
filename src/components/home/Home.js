import React from "react";
import './index.css';

export default function Home() {
    //adicionando comentario para test
    return (
        <div className="home">
          <h1>Home</h1>
            <div className="player">
                <div className="online">
                    <div className="online-title"><h1>Players Online </h1></div>
                    <div className="player-btn -01">
                        <button className="online player-btns">000</button>
                    </div>
                </div>
                <div className="total">
                    <div className="total-title"><h1>Total Players</h1></div>
                    <div className="player-btn -02">
                        <button className="total player-btns">000</button>
                    </div>
                </div>
                <div className="account">
                    <div className="account-title"><h1>Total Accounts </h1></div>
                    <div className="player-btn -03">
                        <button className="accounts player-btns">000</button>
                    </div>
                </div>   
            </div>
            <div className="gameAndLogin">
                <div className="sectiongame">
                <div className="titleLogin"><h1>Game and login Server</h1></div>
                <div className="btns">
                    <button className="bnt4 player-btns">Disconnect server</button>
                    <button className="bnt5 player-btns">Reboot server</button>
                </div>
                </div>
            </div>
            <div className="server">
                <div className="listserver">
                    <div className="sectionserver">
                        <div className="titleServer"><h1>login Server</h1></div>
                        <div className="btnServer">
                            <button className="bnt6 player-btns">Disconnect server</button>
                            <button className="bnt7 player-btns">Reboot server</button>
                            <button className="bnt8 player-btns">Reboot server</button>
                        </div>
                    </div>
                    <div className="sectiongame">
                        <div className="titleGame"><h1>Game Server</h1></div>
                        <div className="btnGame">
                            <button className="bnt9 player-btns">Disconnect server</button>
                            <button className="bnt10 player-btns">Reboot server</button>
                            <button className="bnt11 player-btns">Disconnect server</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};