import React, { useState } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const Header = ({ logo }) => {
    const [isActive, setIsActive] = useState(false)

    const burgerBtnClass = classnames("navbar-burger", isActive ? "is-active" : "")
    const burgerMenuClass = classnames("navbar-menu", isActive ? "is-active" : "")
    return (
        <header>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img src={logo} width="112" height="28" />
                        </Link>

                        <div role="button" 
                            className={burgerBtnClass} 
                            aria-label="menu" 
                            aria-expanded="false" 
                            data-target="navbarBasicExample" 
                            onClick={() => setIsActive(!isActive)}>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                        </div>
                    </div>

                    <div id="navbarBasicExample" className={burgerMenuClass}>
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/">
                                Home
                            </Link>

                            <a className="navbar-item">
                                Documentation
                            </a>

                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    More
                                </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        About
                                    </a>
                                    <a className="navbar-item">
                                        Jobs
                                    </a>
                                    <a className="navbar-item">
                                        Contact
                                    </a>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item">
                                        Report an issue
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a href="/admin" className="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a className="button is-light">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header