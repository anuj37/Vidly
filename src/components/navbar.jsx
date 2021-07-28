import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">
                Vidly
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                        Movies 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/customers">
                        Customers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/rentals">
                        Rentals
                        </Link>
                    </li>
                
                </ul>
            </div>
        </nav>

        );
    }
}
 
export default NavBar;