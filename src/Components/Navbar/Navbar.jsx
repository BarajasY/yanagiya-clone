import React, { useState, useEffect } from 'react';
import './Navbar.css';
import yanagiya_logo from '../../assets/yanagiya_logo.png';
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const [Navbar, setNavbar] = useState(false)
    const [ShortNav, setShortNav] = useState(false)
    const [DropdownNav, setDropdownNav] = useState(false)


    useEffect(() => {
        const width = window.screen.width;
        if (width < 992) {
            setShortNav(true)
        } else {
            setShortNav(false)
        }
    }, [])

    const changeNavbar = () => {
        if (window.scrollY >= 1) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeNavbar)

    const handleDropdown = () => {
        if (DropdownNav === false) {
            setDropdownNav(true)
        } else {
            setDropdownNav(false)
        }
    }


    return (
        <>
            {
                ShortNav
                    ?
                    <div className={Navbar ? "navbar_container active" : "navbar_container"}>
                        <div className="logo_container">
                            <Link to="/">
                                <img src={yanagiya_logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="dropdown_menu">
                            <FiMenu onClick={handleDropdown} />
                        </div>
                        {DropdownNav
                            ? <div className="dropdown_links">
                                <Link to='/'>HOME</Link>
                                <Link to='/nuestra-carne'>NUESTRA CARNE</Link>
                                <Link to='/tienda'>TIENDA</Link>
                                <Link to='/recipes'>RECETAS</Link>
                            </div>
                            : null
                        }
                    </div>
                    :
                    <div className={Navbar ? "navbar_container active" : "navbar_container"}>
                        <div className="logo_container">
                            <Link to="/">
                                <img src={yanagiya_logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="navbar_links">
                            <div className="links">
                                <Link to='/'>HOME</Link>
                                <Link to='/nuestra-carne'>NUESTRA CARNE</Link>
                                <Link to='/tienda'>TIENDA</Link>
                                <Link to='/recipes'>RECETAS</Link>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Navbar