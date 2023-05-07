import { Routes ,Route } from 'react-router-dom';
import React from "react";
import Home  from "../home/Home";
import Chat from "../chat/Chat";
import Login from "../login/Login"
import './index.css';


export default function Page() {
  return (
    <div>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  );
};