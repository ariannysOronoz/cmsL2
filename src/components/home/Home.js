import React from "react";
import Player from "./player/Player";
import './index.css';
import Server from "./server/Server";

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
            <Server className=""
            title="Game and Login Server"
            disconnet="Disconnet Server"
            reboot="Reboot server"
            />
            <Server className=""
            title="Login Server"
            disconnet="Disconnet Server"
            reboot="Reboot server"
            block="Block Server"
            />
            <Server className=""
            title="Game Server"
            disconnet="Disconnet Server"
            reboot="Reboot server"
            block="Block Server"
            />
        </div>
    );
};