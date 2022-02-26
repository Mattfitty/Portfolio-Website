import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import'./Navbar.css';
import { Button } from './Button';

function Navbar(){
    const [click, setClick] = useState(false); //If you clcik hamburger menu it switches between states
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click); //When you click it reversed whatever the state is
    const closeMobileManu = () => setClick(false); //Whem you choose an option on navbar, this will automatically close it

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container"> 
                    <Link to="/" className="navbar-logo"> 
                    <i class="fa-solid fa-gears"></i> Matthew Fticar
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-circle-xmark' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                     <li className='nav-item'>
                         <Link to='/' className='nav-links' onClick={closeMobileManu}>
                             Home
                         </Link>
                    </li> 
                    <li className='nav-item'>
                         <Link to='/aboutMe' className='nav-links' onClick={closeMobileManu}>
                             About Me
                         </Link>
                    </li>
                    <li className='nav-item'>
                         <Link to='projects/' className='nav-links' onClick={closeMobileManu}>
                             Projects
                         </Link>
                    </li> 

                    </ul> 

                </div> 
            </nav>
        </>
    );
}

export default Navbar