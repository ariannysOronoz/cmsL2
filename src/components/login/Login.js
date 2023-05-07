import React from "react";
import './index.css';

export default function Login() {

    return (
        <div className="login">
          <div className="Title">login</div>
          <div className="value1">
            <div className="">Some value 1</div>
            <button className="btnEnable">enable</button>
          </div>
          <div className="value2">
            <div className="">Some value 2</div>
            <div className="btnValue2">
              <button className="btnxxx">xxx</button>
              <button className="btnUpdate">update</button>
            </div>
          </div>
          <div className="value3">
          <div className="">Some value 3</div>
            <div className="btnValue3">
              <button className="btnMin">min</button>
              <button className="btnMax">max</button>
              <button className="btnUpdateValue3">update</button>
            </div>
          </div>
        </div>
        )
    };