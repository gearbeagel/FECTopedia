import React from 'react';
import logo from '../assets/IMG_1431.png';

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center w-screen fixed top-0 justify-between navbar bg-white z-10"> {/* Ensure background color for visibility */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-4" />
        <span className="text-blue-500 text-xl"><a href="/info" style={{textDecoration: "none"}}>FECTопедія</a></span>
      </div>
      <div className="flex space-x-4 mr-3">
        <a href="/map" className="text-blue-500 hover:text-purple-500" style={{textDecoration: "none"}}>Карта факультету</a>
        <a href="/about" className="text-blue-500 hover:text-purple-500" style={{textDecoration: "none"}}>Про авторів</a>
      </div>
    </nav>
  );
};

export default Navbar;
