import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const Slidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="slidebar navbar navbar-expand-lg">
      <div className="container-fluid justify-content-between p-0">
        <Link to="/" className="navbar-brand d-flex align-items-stretch p-0 header-logo">
          <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1751459056/Screenshot_2025-07-02_175254_agc8xu.png" alt="Logo" className="logo" style={{marginLeft:"-20px"}}/>
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/plans" className="nav-link">Plans</Link></li>
            <li className="nav-item"><Link to="/cost" className="nav-link">Cost</Link></li>
            <li className="nav-item"><Link to="/terms" className="nav-link">Terms & Conditions</Link></li>
            <li className="nav-item"><Link to="/contactUs" className="nav-link">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Slidebar;
