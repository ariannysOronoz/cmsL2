import {useState} from "react";
import MenuItem from "./menuItem/MenuItem";
import Page from "../page/Page";
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
        name:'Chat',
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
      <div className="pagina">

        <div className= "header " onClick={() => setShow(!show)}>
            <i className="fas fa-bars nav-logo-icon"></i>
            <h3>CMSL2</h3>  
        </div>
        
        <div className="contenidoPagina">
            <div className={`sidebar ${show ? 'show' : null}`}>
              <nav className='nav'>
                <div>
                  {
                      menuInf.map( 
                        menu =>
                        (
                          <MenuItem className={`hola ${show ? 'show' : null}`} 
                              image ={menu.image} 
                              name={menu.name}
                              link={menu.link}
                          />
                        )
                      )
                    }
                </div>
              </nav>
            </div>

            <div className="abrir">
              <Page/>
            </div>
        </div>
      </div>
    );
  };
  