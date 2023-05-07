import './index.css';
import React from "react"; 
import { Link } from 'react-router-dom';

export default function MenuItem({name,image,link}){
    return (
        <div key={name} className='nav-list'>
                <Link to={`/${link}`} className='nav-link'>
                  <i className={`${image} nav-link-icon`}></i>
                  <span className='nav-link-name'>{name}</span>
                </Link>
        </div>
    );
};