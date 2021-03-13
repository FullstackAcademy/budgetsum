import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>BudgetSum.</div>
        <nav>
          <ul>
            <li>
              <Link to="/home">discover</Link>
            </li>
            <li>
            <Link to="/products">products</Link>
            </li>
            <li>
            <Link to="/contact">contact</Link>
            </li>
            <li className='btn'>
              <Link to="/login">login/signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar
