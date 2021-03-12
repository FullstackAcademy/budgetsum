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
              <a href='/'>discover</a>
            </li>
            <li>
              <a href='/'>products</a>
            </li>
            <li>
              <a href='/'>contact</a>
            </li>
            <li className='btn'>
              <a href='/'>login/signup</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar
