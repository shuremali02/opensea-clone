"use client"
import React from 'react';
import Styles from "../../Styles/component/_request.module.scss";

import { useRouter } from 'next/navigation';
import { MdOutlineMail } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
export default function Request() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/SignUp")
  }


  
  return (
    <div className={Styles.logincontainer}>
      <div>
        <Image
          src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738583470/signup_image_fdkn56.png"
          alt="Sign Up Illustration"
          width={600}
          height={700}
        />
      </div>
      <div className={Styles.loginform}>
        <h1 className={Styles.h1}>Forget Password</h1>
        <form>
          <div className={Styles.label}>



            <div className={Styles.search}>
              <MdOutlineMail className={Styles.icon} size={20} />
              <input
                className={Styles.input}
                type="email"
                placeholder="Email Address"
              />
            </div>
          </div>

          <Link href={"/ForgetPassword/VerifyOtp"}> <button className={Styles.button}>Send Otp</button></Link>
        </form>



        <div className={Styles.accountText} >
          <p className={Styles.p}>Dont have an account?</p>
          <button onClick={handleClick} className={Styles.loginLink}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}
