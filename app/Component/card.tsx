"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { nftData } from "../drops/page";
import Image from "next/image";
export default function NftCard () {
    return (
      <div>
        <div className="flex items-center justify-center  bg-gray-100">
          <h1 className="md:text-7xl p-4 text-3xl sm:text-5xl font-bold hover:animate-pulse">TOP NFT&#39;s</h1>
        </div>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {nftData.map((nft, index) => (
          <motion.div
            key={index}
            whileHover={{ scale:1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-2xl shadow-lg"
          >
            <Card className="h-full">
              <Image
                src={nft.image}
                alt={nft.title}
                width={330}
                height={302}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 bg-white">
                <CardTitle className="text-lg font-bold mb-2 ">{nft.title}</CardTitle>
                <div>
                  <div className="flex justify-between">
                  <p className="text-sm text-gray-600 text-start">Floor: {nft.floorPrice || "N/A"}</p>
                  <p className="text-sm text-gray-600 text-start">Token: {nft.tokenNumber || "N/A"}</p>
                  </div>
                  <div >
                  <p className="text-sm text-gray-600 text-start">Volume: {nft.totalVolume || "N/A"}</p>
                  </div>
                </div>
               
              </CardContent>
            </Card>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 hover:opacity-100 transition duration-500"></div>
          </motion.div>
        ))}
      </div>
      </div>
    );
  };
  

  