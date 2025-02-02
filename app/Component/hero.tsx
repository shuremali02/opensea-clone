import Image from 'next/image';
import styles from '../Styles/component/_hero.module.scss';
import typewritter from "@/app/Styles/component/_typewritter.module.scss"

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
            src="https://res.cloudinary.com/db3yy1i0j/image/upload/v1738521563/Highlighted_NFT_uaogf9.png"
          />
        </div>
          {/* Hero Content */}
          <div className={styles.content}>
          <h1 className={styles.title}>
            <div className={typewritter.typewriter}>
              Experience the Next Generation of Digital Art
            </div>
          </h1>
          <p className={styles.description}>
            Immerse yourself in a world where creativity meets technology. Our platform showcases a unique collection of NFTs that redefine art and innovation. Whether you&#39;re a collector, an enthusiast, or a creator, there&#39;s something for everyone.
          </p>
          <p className={styles.note}>
            Discover limited-edition digital assets, unlock exclusive benefits, and become a part of a thriving community of visionaries and creators.
          </p>

          {/* Call to Action */}
          <div className={styles.cta}>
            <button className={styles.primaryButton}>
              Explore Collections
            </button>
            <button className={styles.secondaryButton}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
