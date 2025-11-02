import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="navbar">
                <img src="./home-logo.jpg" alt="home-logo" />
                <i ><span>MENU</span><FaBars className='menuIcon' size={'3vw'}/></i>
                <ul className='links'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header