import React from 'react'

const Footer = () => {
    const date = new Date();

    return (
        <div>
            Admin desarrollado en React JS &copy; { date.getFullYear() }
        </div>
    );
}

export default Footer;
