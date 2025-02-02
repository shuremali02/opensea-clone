"use client"
import React from 'react';
import Styles from "../../Styles/component/_verify.module.scss";

import { useRouter } from 'next/navigation';

export default function Verify() {
  const router =useRouter()
    
    const handleClick = () => {
    router.push("/ForgetPassword/ResetPassword")
    }
  return (
    <div className={Styles.maincontainer}>
      <div className={Styles.verifyform}>
        <h1 className={Styles.h1}>Verification</h1>
        <div className={Styles.label}>
          <label>Enter Verification Code</label>
          </div>
        <div className={Styles.inputrow}>
          <input className={Styles.input} type="text" placeholder="_" />
          <input className={Styles.input} type="text" placeholder="_" />
          <input className={Styles.input} type="text" placeholder="_" />
          <input className={Styles.input} type="text" placeholder="_" />
          </div>
          <button onClick={handleClick} className={Styles.button}>Verify</button>
        <p className={Styles.p2}>Did you not receive a code?</p>
        <button className={Styles.button2}>Resend</button>
      </div>
    </div>
  );
}
