/**
 * Created by chandransh on 14/1/17.
 */
'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';

import './Header.css';
import logo from '../../../resources/images/he-logo-white.png';

class Header extends Component {
  render() {
    return (
      <header className="full-width header-container">
        <div className="full-grid">
          <Link to="/">
            <img className="he-logo" src={logo} alt="HackerEarth Logo"/>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;