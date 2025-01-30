import styles from "../Styles/component/_footer.module.scss";
import { FaTwitter, FaInstagram, FaDiscord, FaReddit, FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa";

const Footer = () => {
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
          <h3>Join the community</h3>
          <div className={styles.icons}>
            <FaTwitter />
            <FaInstagram />
            <FaDiscord />
            <FaReddit />
            <FaYoutube />
            <FaTiktok />
            <FaEnvelope />
          </div>
        </div>

        {/* Need help section */}
        <div className={styles.section}>
          <h3>Need help?</h3>
          <button className={styles.supportButton}>Contact Support</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
