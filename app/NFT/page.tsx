"use client"

export const nftData = [
    {
      title: "Azuki Elementals",
      floorPrice: "0.30 ETH",
      totalVolume: "65K ETH",
      tokenNumber: null,
      image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307952/azuki_rkpsvh.avif", 
    },
    {
      title: "Parallel Avatars",
      floorPrice: "0.65 ETH",
      totalVolume: "7,640 ETH",
      tokenNumber: null,
      image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307950/parralel_j4iffq.avif",
    },
    {
      title: "The Ancients of Hol...",
      floorPrice: "0.04 ETH",
      totalVolume: "16 ETH",
      tokenNumber: null,
      image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307950/acci_b8r9f6.avif",
    },
    {
      title: "Footium Players",
      floorPrice: "<0.01 ETH",
      totalVolume: "364 ETH",
      tokenNumber: null,
      image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307951/footi_mqb8pw.avif",
    },
    {
      title: "OCH Genesis Ring",
      floorPrice: "1.95 ETH",
      totalVolume: "3,328 ETH",
      tokenNumber: null,
      image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307951/OCH_xxeiu4.avif",
    },
    {
      title: "BredApeYuriClub",
      floorPrice: "<0.01 ETH", 
      totalVolume: null, 
      tokenNumber: null, 
      image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307953/bredapi_yptx8f.avif",
    },
  ];
  

import React from 'react'
import NftCard from '../Component/card';

export default function Nft() {
  return (
    <div>
        <NftCard/>
    </div>
  )
}
