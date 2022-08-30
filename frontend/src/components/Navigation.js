import React from 'react';
import { Link } from "react-router-dom"
const Navigation = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-sm bg-info'>
                <ul className='nav navbar-nav'>
                    <Link to="/" className='nav-item text-dark ml-3'>
                        <li >List</li>
                    </Link>
                    <Link to="/ajouter" className='nav-item text-dark ml-3'>
                        <li > ajouter</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;