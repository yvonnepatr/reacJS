import React from 'react'

const Header = () => {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" />dmin
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <span style={{ margin: "0 1.3em" }}>
                            Juan Perez
                        </span>
                        <div className="buttons">
                            <a className="button is-small is-info">
                                <span>
                                    Cerrar Sesión
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
