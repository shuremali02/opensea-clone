"use client"

export const nftData = [
  {
    title: "Azuki Elementals",
    floorPrice: "0.30 ETH",
    totalVolume: "65K ETH",
    tokenNumber: 2000,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307952/azuki_rkpsvh.avif",
  },
  {
    title: "Parallel Avatars",
    floorPrice: "0.65 ETH",
    totalVolume: "7,640 ETH",
    tokenNumber: 1500,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307950/parralel_j4iffq.avif",
  },
  {
    title: "The Ancients of Hol...",
    floorPrice: "0.04 ETH",
    totalVolume: "16 ETH",
    tokenNumber: 500,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307950/acci_b8r9f6.avif",
  },
  {
    title: "Footium Players",
    floorPrice: "<0.01 ETH",
    totalVolume: "364 ETH",
    tokenNumber: 1800,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307951/footi_mqb8pw.avif",
  },
  {
    title: "OCH Genesis Ring",
    floorPrice: "1.95 ETH",
    totalVolume: "3,328 ETH",
    tokenNumber: 1200,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307951/OCH_xxeiu4.avif",
  },
  {
    title: "BredApeYuriClub",
    floorPrice: "<0.01 ETH",
    totalVolume: "3,348 ETH",
    tokenNumber: 800,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738307953/bredapi_yptx8f.avif",
  },
  {
    title: "Mutant Hound Collars",
    floorPrice: "0.98 ETH",
    totalVolume: "11K ETH",
    tokenNumber: 3000,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738342710/wvprs_i1fuj6.avif",
  },
  {
    title: "Doodles",
    floorPrice: "2.50 ETH",
    totalVolume: "150K ETH",
    tokenNumber: 5000,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738342714/pudgypingles_cw5l7x.avif",
  },
  {
    title: "CloneX",
    floorPrice: "1.75 ETH",
    totalVolume: "78K ETH",
    tokenNumber: 3500,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738342709/piple_fz6f1v.avif",
  },
  {
    title: "Moonbirds",
    floorPrice: "1.10 ETH",
    totalVolume: "90K ETH",
    tokenNumber: 2700,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738342709/RVLTD_qjodok.avif",
  },
  {
    title: "Cool Cats",
    floorPrice: "0.89 ETH",
    totalVolume: "55K ETH",
    tokenNumber: 2200,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738342708/Pepexel_d3pg0l.avif",
  },
  {
    title: "Pudgy Penguins",
    floorPrice: "3.40 ETH",
    totalVolume: "43K ETH",
    tokenNumber: 4500,
    image: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1738342708/ORL_oceans_rrajjl.avif",
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
