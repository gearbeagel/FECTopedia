import React from 'react';
import logo from '../assets/IMG_1431.png'

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between navbar">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-4" />
        <span className="text-blue-500 text-xl"><a href="/" style={{textDecoration: "none"}}>FECTопедія</a></span>
      </div>
      <div className="flex space-x-4">
        <a href="/map" className="text-blue-500 hover:text-purple-500">Карта факультету</a>
        <a href="/about" className="text-blue-500 hover:text-purple-500">Про авторів</a>
      </div>
    </nav>
  );
};

export default Navbar;
