"use client";
import React from 'react';
import Styles from "@/app/Styles/Component/_reset.module.scss";

import { useRouter } from 'next/navigation';
export default function ResetPass() {
  const router =useRouter()
    
    const handleClick = () => {
    router.push("/Login")
    }
  return (
    <div className={Styles.maincontainer}>
      <div className={Styles.resetform}>
        <h1 className={Styles.h1}>New Password</h1>
        <div className={Styles.label}>
          <label>Enter New Password</label>
          <input className={Styles.input} type="text" />
          <label>Confirm Password</label>
          <input  className={Styles.input} type="password" />
 
          <button onClick={handleClick} className={Styles.button}>SUBMIT</button>
        </div>
         
      </div>
    </div>
  );
}
