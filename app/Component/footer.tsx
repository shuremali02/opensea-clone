import styles from "../Styles/component/_footer.module.scss";
import { FaTwitter, FaInstagram, FaDiscord, FaReddit, FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa";
import Button, { Type } from "./button";

const Footer = () => {
  const buttons:Type[]=[
    {text:"Twitter",icon:<FaTwitter size={28}/> as unknown as string},
    {text:"Instagram",icon: <FaInstagram size={28}/> as unknown as string},
    {text:"Discord",icon: <FaDiscord size={28}/> as unknown as string},
    {text:"Reddit",icon: <FaReddit size={28}/> as unknown as string},
    {text:"Youtube",icon: <FaYoutube size={28}/> as unknown as string},
    {text:"Tiktok",icon: <FaTiktok size={28}/> as unknown as string},
    {text:"Email",icon: <FaEnvelope size={28}/> as unknown as string},
    
  ]
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Stay in the loop section */}
        <div className={styles.section}>
          <h3>Stay in the loop</h3>
          <p>
            Join our mailing list to stay in the loop with our newest feature releases, NFT drops,
            and tips and tricks for navigating OpenSea.
          </p>
          <div className={styles.signup}>
            <input type="email" placeholder="Your email address" />
            <button>Sign up</button>
          </div>
        </div>

        {/* Join the community section */}
        <div className={styles.section}>
          <h3 className={styles.h3}>Join the community</h3>
          <div className={styles.icons}>
            {buttons.map((button,index)=>(
              <Button key={index} {...button}/>
            ))}
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;

