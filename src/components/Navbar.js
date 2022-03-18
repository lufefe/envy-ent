import React, {useState, useEffect} from 'react';
import HomeLogo from '../assets/envy_text_logo.png';
import {Link} from 'react-router-dom' ;
import './Navbar.css';
import { Button } from './Button';
import Dropdown from './Dropdown';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className = {navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                         <img src= {HomeLogo} alt="Nav bar logo"/> 
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home </Link>
                        </li>
                      
                        <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}> About &nbsp;<i className='fas fa-caret-down'/> </Link>
                            {dropdown && <Dropdown/>}
                        </li>

                        <li className="nav-item">
                            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}> Portfolio </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}> Contact Us </Link>
                        </li>

                    </ul>

                {button && <Button buttonStyle='btn--outline'>  <a href='https://sacoronavirus.co.za' target='_blank' rel="noopener noreferrer">Covid Response</a></Button>}
                </div>

            </nav>
        </>
    )
};

export default Navbar;
