"use client"

import React from 'react';
import Styles from "@/app/Styles/Component/_request.module.scss";
import { useRouter } from 'next/navigation';
export default function Request() {
    const router =useRouter()
    
    const handleClick = () => {
    router.push("/SignUp")
    }
    
    const ClickLogin = () => {
        router.push("/Login")
        }
        const ClickNewPass = () => {
            router.push("/ForgetPassword/VerifyOtp")
            }
  return (
    <div className={Styles.logincontainer}>
      <div className={Styles.loginform}>
        <h1 className={Styles.h1}>Forget Password</h1>
        <div className={Styles.label}>
          <label>Enter Email Address</label>
          </div>
          <input className={Styles.input} type="text" placeholder="example@gmail.com" />
          <button onClick={ClickLogin} className={Styles.button1}>Back to login</button>
        <button onClick={ClickNewPass} className={Styles.button}>Send Otp</button>

        

       
        <p className={Styles.p2}>Dont have an account?</p>
        <button onClick={handleClick} className={Styles.button2}>SIGN UP</button>
      </div>
    </div>
  );
}
