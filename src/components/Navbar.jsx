import React from 'react';
import { InfoCircle, Map, PersonCircle } from 'react-bootstrap-icons'; 
import logo from '../assets/IMG_1431.png';
import ThemeChanger from './ThemeChanger';

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center w-screen md:w-full fixed top-0 justify-between navbar bg-white z-20">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-4" />
        <span className="text-blue-500 text-xl"><a href="/info" style={{ textDecoration: "none" }}>FECTопедія</a></span>
      </div>
      <div className="flex space-x-4 mr-3">
        <ThemeChanger />
        <a href="/map" className="text-blue-500 hover:text-purple-500 flex items-center mx-2" style={{ textDecoration: "none" }}>
          <Map className="block md:hidden" size={20} /> 
          <span className="hidden md:block">Мапа факультету</span>
        </a>
        <a href="/about" className="text-blue-500 hover:text-purple-500 flex items-center mx-2" style={{ textDecoration: "none" }}>
          <PersonCircle className="block md:hidden" size={20} />
          <span className="hidden md:block">Про авторів</span> 
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
