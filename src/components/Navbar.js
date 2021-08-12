import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar is-primary" style={{background: '#005c42'}}>
            <div className="container">
                <div className="navbar-brand">
                    <span className="navbar-item">
                        PagaTodo
                    </span>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
