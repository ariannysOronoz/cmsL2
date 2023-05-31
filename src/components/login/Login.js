import React from "react";
import LoginItem from "./loginItem/LoginItem";
import './index.css';

export default function Login() {

    return (
            <div className="login">
            <h1>login</h1>
                <section className="value1">
                <h2> Some value 1 </h2>
                    <button className="btnEnable">enable</button>
                </section>
                <LoginItem className="sectionValue2"
                    title={"Some Value 2"}
                    valueMin={"xxxxx"}
                    update={"update"}
                /> 
                <LoginItem className="sectionValue3"
                    title={"Some Value 2"}
                    valueMin={"xxxxx"}
                    valueMax={"xxxxx"}
                    update={"update"}
                />
            </div>
    )
};