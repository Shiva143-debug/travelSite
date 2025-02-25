import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import './index.css'

const Slidebar = () => {



  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="display">
      <Link to="/" className="element">
        <img
          src="data:image/png;base64,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"
          alt="any"
          className="logo"
        />
      </Link>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        {isMobileMenuOpen &&
          <div style={{ color: "white" }}>
            <Link to="/" className="element">
              <p>Home</p>
            </Link>
            <Link to="/plans" className="element">
              <p>Plans</p>
            </Link>
            <Link to="/cost" className="element">
              <p>cost</p>
            </Link>
            <Link to="/terms" className="element">
              <p>terms&conditions</p>
            </Link>
            <Link to="/contactUs" className="element">
              <p>contactUs</p>
            </Link>
          </div>}
      </div>
      <div className="display-flex">
        <Link to="/" className="element">
          <p>Home</p>
        </Link>
        <Link to="/plans" className="element">
          <p>Plans</p>
        </Link>
        <Link to="/cost" className="element">
          <p>cost</p>
        </Link>
        <Link to="/terms" className="element">
          <p>terms&conditions</p>
        </Link>
        <Link to="/contactUs" className="element">
          <p>contactUs</p>
        </Link>
      </div>
    </div>
  )

}

export default Slidebar
