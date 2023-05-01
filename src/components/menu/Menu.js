import {useState} from "react";
import './index.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    
    const [show, setShow] = useState(false);

    return (
      
      <main>
        <aside className={`sidebar ${show ? 'show' : null}`}>
          <nav className='nav'>
            <div>
              <div lassName='header-toggle' onClick={() => setShow(!show)}>
              <Link to='/' className='nav-logo'>
                <i className={`fas fa-bars nav-logo-icon`}></i>
                <span className='nav-logo-name'>MENU</span>
              </Link>
              </div>
             
              <div className='nav-list'>
                <Link to='/home' className='nav-link'>
                  <i class='fa-sharp fa-solid fa-home nav-link-icon'></i>
                  <span className='nav-link-name'>home</span>
                </Link>
                <Link to='/chat' className='nav-link'>
                  <i class='fa-sharp fa-solid fa-comments nav-link-icon'></i>
                  <span className='nav-link-name'>Chat</span>
                </Link>
                <Link to='/login' className='nav-link'>
                  <i className='fas fa-sign-out nav-link-icon'></i>
                  <span className='nav-link-name'>Login</span>
                </Link>
                <Link to='/server' className='nav-link'>
                  <i class="fa-solid fa-server"></i>
                  <span className='nav-link-name'>Server</span>
                </Link>
                <Link to='/player' className='nav-link'>
                  <i class="fa-sharp fa-solid fa-user-astronaut"></i>
                  <span className='nav-link-name'>player</span>
                </Link>
                <Link to='/events' className='nav-link'>
                  <i class="fa-solid fa-calendar-days"></i>
                  <span className='nav-link-name'>Events</span>
                </Link>
                <Link to='/siege' className='nav-link'>
                <i class="fa-sharp fa-solid fa-chess-rook"></i>
                  <span className='nav-link-name'>Siege</span>
                </Link>
              </div>
            </div>
          </nav>
        </aside>
      </main>
    );
  };
  