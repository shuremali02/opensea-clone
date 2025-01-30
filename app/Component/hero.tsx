import styles from '../Styles/component/_hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            alt="hero"
            src="https://pixelplex.io/wp-content/uploads/2022/02/how-to-create-an-nft-marketplace-main-1600-1.jpg"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Knausgaard typewriter readymade marfa
          </h1>
          <p className={styles.description}>
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
            swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
          </p>
          <div className={styles.inputContainer}>
            <div className={styles.inputWrapper}>
              <label htmlFor="hero-field" className={styles.label}>
                Placeholder
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className={styles.input}
              />
            </div>
            <button className={styles.primaryButton}>Button</button>
          </div>
          <p className={styles.note}>
            Neutra shabby chic ramps, viral fixie.
          </p>
          <div className={styles.buttonsContainer}>
            <button className={styles.secondaryButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span>
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </button>
            <button className={styles.secondaryButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className={styles.icon}
                viewBox="0 0 305 305"
              >
                <path d="..."></path>
              </svg>
              <span>
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
