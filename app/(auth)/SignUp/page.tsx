"use client";
import React from "react";
import Styles from "../../Styles/Pages/_signup.module.scss";
// import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { GiConfirmed } from "react-icons/gi";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/Login");
  };

  // const buttons = [
  //   {
  //     text: "Sign up with Facebook",
  //     icon: <FaFacebook className={Styles.icon1} size={20} />,
  //   },
  //   {
  //     text: "Sign up with Twitter",
  //     icon: <FaTwitter className={Styles.icon2} size={20} />,
  //   },
  //   {
  //     text: "Sign up with Google",
  //     icon: <FaGoogle className={Styles.icon3} size={20} />,
  //   },
  // ];

  return (
    <div className={Styles.maincontainer}>
      {/* Left Section */}
      <div>
        <Image
          src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738583470/signup_image_fdkn56.png"
          alt="Sign Up Illustration"
          width={600}
          height={700}
        />
      </div>

      {/* Right Section */}
      <div className={Styles.signupform}>
        <h1 className={Styles.h1}>Create Account</h1>
        <p className={Styles.subheading}>
          Welcome! Enter Your Details And Start Creating, Collecting, And
          Selling NFTs.
        </p>

        <form>
          <div className={Styles.label}>

            <div className={Styles.search}>
              <FaRegUser className={Styles.icon} size={20} />

              <input className={Styles.input} type="text" placeholder="Username" />
            </div>
            <div className={Styles.search}>
              <MdOutlineMail className={Styles.icon} size={20} />
              <input
                className={Styles.input}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className={Styles.search}>
              <TbLockPassword className={Styles.icon} size={20} />
              <input
                className={Styles.input}
                type="password"
                placeholder="Password"
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
          </div>
          <button type="submit" className={Styles.button}>
            Create account
          </button>
        </form>

        <p className={Styles.orText}>Or</p>

        {/* <div>
          {buttons.map((button, index) => (
            <button key={index} className={Styles.iconsbutton}>
              {button.icon}
          
            </button>
          ))}
        </div> */}

        <div className={Styles.accountText}>
          <p>Already have an account?</p>
          <button className={Styles.loginLink} onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
