"use client"
import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi';
import { SiSimplelogin } from "react-icons/si";
import { TfiSearch } from "react-icons/tfi";
import Styles from "@/app/Styles/component/_header.module.scss"; 
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router =useRouter()
    
  const handleClick1 = () => {
  router.push("/Login")
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.container}>
        {/* Logo Section */}
        <div className={Styles.logo}>
          <Link href={"/"} className='gap-2 flex items-center'>
          <Image src="https://res.cloudinary.com/db3yy1i0j/image/upload/v1738522965/Storefront_rp1sdb.png"
           alt="OpenSea Logo" 
           width={40}
            height={40} 
            className={Styles.logo} />

            <span className='text-white font-serif'>NFT MARKETPLACE</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`${Styles.desktopnav} px-4`} >
          <div className={Styles.links}>
            <Link href="/drops" className={Styles.link}>Drops</Link>
            <Link href="#" className={Styles.link}>Stats</Link>
            <Link href="#" className={Styles.link}>Create</Link>
          </div>

          {/* Search Bar */}
          <div className={Styles.parentcontainer} >
          <div className={Styles.search}>
            <FiSearch className={Styles.icon} size={20} />
            <input 
              type="text" 
              placeholder="Search" 
              className={Styles.input}
            />
          </div>
          </div>
        </div>

        {/* Right Section */}
       
        <div className={Styles.actions}>
        <div>
          <button onClick={handleClick1} className={Styles.loginbtn}><SiSimplelogin size={24}/> login</button>
        </div>
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
          <Link href="/drops" className={Styles.mobilelinks} onClick={() => setIsOpen(!isOpen)}>Drops</Link>
          <Link href="#" className={Styles.mobilelinks} onClick={() => setIsOpen(!isOpen)}>Stats</Link>
          <Link href="#" className={Styles.mobilelinks} onClick={() => setIsOpen(!isOpen)}>Create</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;