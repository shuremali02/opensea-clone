"use client"
import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi';
import { SiSimplelogin } from "react-icons/si";
import { TfiSearch } from "react-icons/tfi";
import Styles from "@/app/Styles/component/_header.module.scss"; 
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.container}>
        {/* Logo Section */}
        <div className={Styles.logo}>
          <Image src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738131782/opensea_logo_cq768y.png"
           alt="OpenSea Logo" 
           width={120}
            height={50} 
            className={Styles.logo} />
          
        </div>

        {/* Desktop Navigation */}
        <div className={Styles.desktopnav}>
          <div className={Styles.links}>
            <a href="#" className={Styles.link}>Drops</a>
            <a href="#" className={Styles.link}>Stats</a>
            <a href="#" className={Styles.link}>Create</a>
          </div>

          {/* Search Bar */}
          <div className={Styles.search}>
            <FiSearch className={Styles.icon} size={20} />
            <input 
              type="text" 
              placeholder="Search" 
              className={Styles.input}
            />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <button className={Styles.loginbtn}><SiSimplelogin size={24}/> login</button>
        </div>
        <div className={Styles.actions}>
          <button className={Styles.mobicon} ><TfiSearch size={24}/></button>
          <button className={Styles.actionbtn}>
            <FiUser size={24} />
          </button>
          <button className={Styles.actionbtn}>
            <FiShoppingCart size={24} />
          </button>
          <button 
            className={Styles.menubtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={Styles.mobilemenu}>
          <a href="#" className={Styles.mobilelinks}>Drops</a>
          <a href="#" className={Styles.mobilelinks}>Stats</a>
          <a href="#" className={Styles.mobilelinks}>Create</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;