import Image from 'next/image';
import styles from '../Styles/component/_hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            alt="hero"
            width={720}
            height={600}
            src="https://www.singlegrain.com/wp-content/uploads/2022/01/SG-5-Best-NFT-Marketplaces-for-Beginners-in-2022.jpg"
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
          <p className={styles.note}>
            Neutra shabby chic ramps, viral fixie.
          </p>
          
        </div>
      </div>
    </section>
  );
}
