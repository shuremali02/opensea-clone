"use client"
import React from 'react';
import Styles from "../../Styles/component/_verify.module.scss";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Verify() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/ForgetPassword/ResetPassword")
  }
  return (
    <div className={Styles.maincontainer}>
      <div>
        <Image
          src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738583470/signup_image_fdkn56.png"
          alt="Sign Up Illustration"
          width={600}
          height={700}
        />
      </div>
      <div className={Styles.verifyform}>
        <h1 className={Styles.h1}>Verification</h1>
        <form action="">
          <div className={Styles.label}>
            <label>Enter Verification Code</label>

            <div className={Styles.inputrow}>
              <input className={Styles.input} type="text" placeholder="_" />
              <input className={Styles.input} type="text" placeholder="_" />
              <input className={Styles.input} type="text" placeholder="_" />
              <input className={Styles.input} type="text" placeholder="_" />
            </div>
          </div>
          <button onClick={handleClick} className={Styles.button}>Verify</button>
        </form>
        <div className={Styles.accountText}>
          <p className={Styles.p2}>Did you not receive a code?</p>
          <button className={Styles.loginLink}>Resend</button>
        </div>
      </div>
    </div>
  );
}
