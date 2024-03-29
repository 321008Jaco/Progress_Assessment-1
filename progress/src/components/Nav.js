import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/chart">Charts</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
