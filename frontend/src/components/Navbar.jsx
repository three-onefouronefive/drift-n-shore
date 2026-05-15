import '../css/NavBar.css';
import logo from '../assets/images/logo.png';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink title="Home" to="/" className='logo'>
                <img src={logo} alt='Logo' />
                Drift & Shore
            </NavLink>

            <div className="navbar-links">
                <NavLink to="/" end>HOME</NavLink>
                <NavLink to="/suites">SUITES</NavLink>
                <NavLink to="/amenities">AMENITIES</NavLink>
                <NavLink to="/dining">DINING</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </div>

            <NavLink to="/reserve">
                <CustomButton text="RESERVE NOW" variant="secondary" />
            </NavLink>
        </nav>
    )
}

export default NavBar