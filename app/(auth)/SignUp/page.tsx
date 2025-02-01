"use client";

import React from 'react';
import Styles from "@/app/Styles/Pages/_signup.module.scss";
import {  FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

import { useRouter } from 'next/navigation';
import Button, { Type } from "@/app/Component/button";

export default function SignUpPage() {
  const buttons:Type[]=[

      {text:"Twitter",icon:<FaTwitter  className={Styles.icon2} size={28}/> as unknown as string},
      {text:"Facebook",icon:<FaFacebook className={Styles.icon1} size={28}/> as unknown as string},
      {text:"Google",icon:<FaGoogle className={Styles.icon3} size={28} /> as unknown as string},

     
    ]
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
        {/* <div className={Styles.icons}>
          <Link href="">
          <button className={Styles.iconsbutton}><FaFacebook className={Styles.icon1} size={24}/>Facebook</button>
          </Link>
          <Link href="">
          <button className={Styles.iconsbutton}><TiSocialTwitterCircular className={Styles.icon2} size={34}/>Twitter</button>
          </Link>
          <Link href="">
          <button className={Styles.iconsbutton}><ImGooglePlus3 className={Styles.icon3} size={24}/> Google</button>
          </Link>
        </div> */}
        <h3>Join the community</h3>
          <div className={Styles.icons}>
            {buttons.map((button,index)=>(
              <Button key={index} {...button}/>
            ))}
          </div>
        <div className={Styles.button2}>
        <p>already have an account  ?</p>{"  "};
        <button onClick={handleClick} className={Styles.button3}> Login</button>  
         </div>
      </div>
    </div>
  );
}
