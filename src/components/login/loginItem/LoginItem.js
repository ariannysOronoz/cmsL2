import './index.css';
import React from "react"; 
import { Link } from 'react-router-dom';

export default function LoginItem(
    {
        title,
        valueMin,
        valueMax,
        update,
    }
  )
{
    return (
        <div className='loginValue'>
            <div className='value'>
                <div className='titleValue'>{title}</div>
                <div className='min'>{valueMin}</div>
                {valueMax!==undefined &&
                    <div className='max'>{valueMax}</div>
                }
                <div className='update'>{update}</div>
            </div>
        </div>
    );
};