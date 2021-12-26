import React from 'react';
import logo from "../img/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="wrapper">
        <h1>
          <Link to="/">
            <img src={logo} alt="djangonautic" />
          </Link>
        </h1>

        <nav>
          <ul>
            <li>
              <Link to="/create/article" className="highlight">
                New Article
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
 
export default Header;