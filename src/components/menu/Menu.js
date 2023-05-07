import {useState} from "react";
import { Link } from 'react-router-dom';
import MenuItem from "./menuItem/MenuItem";
import './index.css';

export default function Menu() {
    
    const [show, setShow] = useState(false);
    const menuInf = 
    [
      {
        image:"fa-sharp fa-solid fa-home",
        name:'home',
        link:'home',
      },
      {
        image:"fa-sharp fa-solid fa-comments",
        name:'chat',
        link:'chat',
      },
      {
        image:"fas fa-sign-out",
        name:'login',
        link:'login',
      },
      {
        image:"fa-solid fa-server",
        name:'server',
        link:'server',
      },
      {
        image:"fa-sharp fa-solid fa-user-astronaut",
        name:'user',
        link:'user',
      },
      {
        image:"fa-solid fa-calendar-days",
        name:'events',
        link:'hola',
      },
      {
        image:"fa-sharp fa-solid fa-chess-rook",
        name:'siege',
        link:'siege',
      },
    ];

    return (
      
      <main>
        <aside className={`sidebar ${show ? 'show' : null}`}>
          <nav className='nav'>
            <div>
              <div className='header-toggle' onClick={() => setShow(!show)}>
                <Link className='nav-logo'>
                  <i className={`fas fa-bars nav-logo-icon`}></i>
                  <span className='nav-logo-name'>MENU</span>
                </Link>
              </div>
                {
                  menuInf.map( 
                    menu =>
                    ( 
                      <MenuItem
                          image={menu.image}
                          name={menu.name}
                          link={menu.link}
                      />
                    )
                  )
                }
            </div>
          </nav>
        </aside>
      </main>
    );
  };
  