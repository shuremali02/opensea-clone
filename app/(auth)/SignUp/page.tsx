"use client";
import Link from 'next/link';
import React from 'react';
import Styles from "@/app/Styles/Pages/_signup.module.scss";
import { FaFacebook } from "react-icons/fa";
import { ImGooglePlus3 } from "react-icons/im";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
    const router =useRouter()
    
    const handleClick = () => {
    router.push("/Login")
    }
  return (
    <div className={Styles.maincontainer}>
      <div className={Styles.signupform}>
        <h1 className={Styles.h1}>Sign Up</h1>
        <div className={Styles.label}>
          
          <label>Email Adress</label>
          <input  className={Styles.input} type="password" />
          <label>Username</label>
          <input className={Styles.input} type="text"  />
          <label>Password</label>
          <input  className={Styles.input} type="password"  />
          <button className={Styles.button}>Sign up</button>
        </div>
        <p>Or</p>
        <div className={Styles.icons}>
          <Link href="">
          <button className={Styles.iconsbutton}><FaFacebook className={Styles.icon1} size={24}/>Facebook</button>
          </Link>
          <Link href="">
          <button className={Styles.iconsbutton}><TiSocialTwitterCircular className={Styles.icon2} size={34}/>Twitter</button>
          </Link>
          <Link href="">
          <button className={Styles.iconsbutton}><ImGooglePlus3 className={Styles.icon3} size={24}/> Google</button>
          </Link>
        </div>
        <div className={Styles.button2}>
        <p>already have an account  ?</p>{"  "};
        <button onClick={handleClick} className={Styles.button3}> Login</button>  
         </div>
      </div>
    </div>
  );
}
