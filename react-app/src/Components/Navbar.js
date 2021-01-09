import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../contexts/AuthContext'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true)
  const { currentUser, logout } = useAuth()

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };



  function properButton() {
    if (currentUser) {
      setLoggedIn(true)
      return (
        <li>
          <Link
            to='/Login'
            className='nav-links '
            onClick={logout}
          >
            Sign Out
          </Link>
        </li>
      )


    } else {
      setLoggedIn(false)
      return (
        <li>
          <Link
            to='/Login'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Login
          </Link>
        </li>

      )
    }
  }

  function logoutChangeButton() {
    logout();
    properButton();
  }



  useEffect(() => {
    showButton();
    properButton();
  }, []);



  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            RecipeFinder
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Recipes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Recipes
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Ingredients'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ingredients
              </Link>
            </li>
            <li>
              <Link
                to='/Videos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to='/Account'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Account
              </Link>
            </li>
            <li>
              <Link
                to='/Favourites'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Favourites
              </Link>
            </li>
            {(loggedIn) ? (<li>

              <Link
                to='/'
                className='nav-links logged-in'
                onClick={() => logoutChangeButton()}
                style={{ display: "grid" }}
              >
                Sign Out
              </Link>
            </li>
            ) : (<li>
              <Link
                to='/Login'
                className='nav-links logged-out'
                onClick={closeMobileMenu}
                style={{ display: "grid" }}
              >
                Login
  </Link>
            </li>)}
            <li>
              <Link
                to='/Login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;