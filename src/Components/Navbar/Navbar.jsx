import React, { useState } from 'react';
import './Navbar.css';
import yanagiya_logo from '../../assets/yanagiya_logo.png';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [Navbar, setNavbar] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 1) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar)



    return (
        <div className={Navbar ? "navbar_container active" : "navbar_container"}>
            <div className="logo_container">
                <img src={yanagiya_logo} alt="logo" />
            </div>
            <div className="navbar_links">
                <div className="links">
                    <Link to='/'>HOME</Link>
                    <Link to='/nuestra-carne'>NUESTRA CARNE</Link>
                    <Link to='/tienda'>TIENDA</Link>
                    <Link to='/'>RECETAS</Link>
                    <Link to='/'>FAQ'S</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar