import React from "react";
import './index.css';

export default function Home() {

    return (

        <div className="home">

            <h1>Home</h1>
            <div className="player">
            <div className="player-online">
                <div className="online -title">
                <h1>Players Online </h1>
                </div>
                <div className="player-btn -01">
                    <button className="online player-btns">000</button>
                </div>
            </div>

            <div className="player-total">
                <div className="total -title">
                <h1>Total Players</h1>
                </div>
                <div className="player-btn -02">
                    <button className="total player-btns">000</button>
                </div>
            </div>

            <div className="totalAccounts">
                <div className="account -title">
                <h1>Total Accounts </h1>
                </div>
                <div className="player-btn -03">
                    <button className="accounts player-btns">000</button>
                </div>
            </div>
            </div>

            <div className="gameAndLogin">
                <div className="titleLogin">
                    <h1>Game and login Server</h1> 
                </div>
                <div className="btns">
                    <button className="bnt4 -btn">Disconnect server</button>
                    <button className="bnt5 -btn">Reboot server</button>
                </div>
            </div>

            <div className="server">

                <div className="login">
                    <div className="titleServer">
                        <h1>Login Server</h1>
                    </div>
                    <div className="btnServer">
                        <button className="bnt6 -btn">Disconnect server</button>
                        <button className="bnt7 -btn">Reboot server</button>
                        <button className="bnt8 -btn">Disconnect server</button>
                    </div>
                </div>

                <div className="game">
                        <div className="titleGame">
                            <h1>Game Server</h1>
                        </div>
                        <div className="btnGame">
                            <button className="bnt9 -btn">Disconnect server</button>
                            <button className="bnt10 -btn">Reboot server</button>
                            <button className="bnt11 -btn">Disconnect server</button>
                        </div>
                </div>
            </div>
        </div>
    );
};