import React from "react";
import LoginItem from "./loginItem/LoginItem";
import './index.css';

export default function Login() {

    return (
            <div className="login">
              <div className="title"><h1>login</h1></div>
                <div className="value1">
                  <div className="titleValue1">Some value 1</div>
                  <div className="btnValue1">
                    <button className="btnEnable">enable</button>
                  </div>
                </div>
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