"use client";
import React from 'react';
import Styles from "../../Styles/Pages/_login.module.scss";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const router =useRouter()
    
    const handleClick = () => {
    router.push("/SignUp")
    }
    const ClickRequest = () => {
      router.push("/ForgetPassword/RequestEmail")
      }
  return (
    <div className={Styles.logincontainer}>

      <div>
      <Image src={"https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738583470/signup_image_fdkn56.png"}
      alt={"LoginImage"} width={610} height={691} />
      </div>
      <div className={Styles.loginform}>
        <h1 className={Styles.h1}>Login</h1>
        <div className={Styles.label}>
          <label>Username</label>
          <input className={Styles.input} type="text" />
          <label>Password</label>
          <input  className={Styles.input} type="password"  />
          <button onClick={ClickRequest} className={Styles.forget}>Forgot password ?</button>
          <button className={Styles.button}>LOGIN</button>
        </div>
        {/* <p>Or </p> */}
        {/* <div className={Styles.icons}>
          <div className={Styles.icon1}>
          <Link className={Styles.icon1} href="https://www.facebook.com/"><FaFacebook size={24}/></Link>
          </div>
        <Link className={Styles.icon2} href="https://www.twitter.com/"><TiSocialTwitter size={34}/></Link>
          <Link className={Styles.icon3} href="https://www.google.com/"><ImGooglePlus3 size={24}/></Link>
        </div> */}<div className={Styles.button2}>
        <p>dont have an account  ?</p>
        <button onClick={handleClick} className={Styles.button3}> Sign Up</button>  
         </div>
      </div>
    </div>
  );
}
