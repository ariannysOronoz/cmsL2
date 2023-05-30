import React from "react";
import Player from "./player/Player";
import './index.css';

export default function Home() {
    
    const playerInf = [
        {
            title:"Players online",
            namebtn:'123',
        },
        {
            title:"Total players",
            namebtn:'132',
        },
        {
            title:"Total Accounts",
            namebtn:'222',
        },
    ];
    //adicionando comentario para test
    return (
        <div>
            <h1>Home</h1>
            {
                playerInf.map( 
                    player =>
                    (
                        <Player
                        title ={player.title} 
                        namebtn={player.namebtn}
                        />
                    )
                )
            }
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