import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="header-left">
                    <div className="logo">
                        <img src="https://imgs.search.brave.com/HMajRapFgZbBNxuO9wnmcfMzL_vSB4U3icw4kTNxZxc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9B/WElTQkFOSy5CT19C/SUcuRC1kODEwNWE4/Ny5wbmc_dD0xNzIw/MjQ0NDkw"
                            alt="Axis Bank Logo" className="logo_img">
                        </img>
                    </div>
                </div>
                <div className="header-center">
                    <h1>Axis Bank</h1>
                </div>
                <div className="header-right">
                    <nav>
                        <ul>
                            <li><NavLink to={'/'}>Home&nbsp;&#9674;</NavLink></li>
                            <li><NavLink to={''}>About Us&nbsp;&#9674;</NavLink></li>
                            <li><NavLink to={'/login'}>Login&nbsp;&#9674;</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
