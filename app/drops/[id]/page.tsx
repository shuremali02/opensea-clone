import React from 'react';
import Image from "next/image";
import { nftData } from '@/lib/data';
import styles from '../../Styles/component/_tokenId.module.scss'; // Import SCSS file
import CountDownTimer from '../../Component/count-down';

export default function TokenId({ params }: { params: { id: string } }) {
  const parsedId = parseInt(params.id);
  const matchid = nftData.find((post) => post.tokenNumber === parsedId);

  if (!matchid) {
    return (
      <div className={styles.notFound}>
        <p>Data Not Found</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={matchid.image}
            alt={matchid.title}
            width={1280}
            height={200}
          />
        </div>

        {/* Main Details */}
        <div className={styles.detailsWrapper}>
          {/* NFT Details */}
          <div className={styles.details}>
            <h1>{matchid.title}</h1>
            <p>Minted On: {matchid.mintedOn}</p>
            <p>
              Token ID: <span className={styles.tokenId}>{matchid.tokenNumber}</span>
            </p>
            <p className={styles.creator}>Created by: {matchid.createdBy}</p>
            <p>{matchid.description}</p>
            <p className={styles.floorPrice}>Floor Price: {matchid.floorPrice}</p>
            <p className={styles.totalVolume}>Total Volume: {matchid.totalVolume}</p>
          </div>

          {/* Countdown Timer */}
          <div className={styles.timer}>
            <CountDownTimer />
            <button className={styles.buyButton}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}