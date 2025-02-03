"use client";
import React from 'react';
import Styles from "../../Styles/component/_reset.module.scss";

import { useRouter } from 'next/navigation';
import { GiConfirmed } from 'react-icons/gi';
import { TbLockPassword } from 'react-icons/tb';
import Image from 'next/image';
export default function ResetPass() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/Login")
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
      <div className={Styles.resetform}>
        <h1 className={Styles.h1}>New Password</h1>
        <div className={Styles.label}>
          <div className={Styles.search}>
            <TbLockPassword className={Styles.icon} size={20} />
            <input
              className={Styles.input}
              type="password"
              placeholder="New Password"
            />
          </div>

          <div className={Styles.search}>
            < GiConfirmed className={Styles.icon} size={20} />
            <div className={Styles.label}>

              <input
                className={Styles.input}
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <button onClick={handleClick} className={Styles.button}>Reset</button>
        </div>

      </div>
    </div>
  );
}
