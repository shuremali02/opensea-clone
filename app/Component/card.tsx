"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
interface CardType {image:string, title:string, totalVolume:number,tokenNumber:number,floorPrice:number,category:string}
export default function NftCard ({image, title, totalVolume,tokenNumber,floorPrice}:CardType) {
    return (
      <div>
          <motion.div
            whileHover={{ scale:1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-2xl shadow-lg"
          >
            <Card className="h-full">
              <Image
                src={image}
                alt={title}
                width={330}
                height={302}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 bg-white">
                <CardTitle className="text-lg font-bold mb-2 ">{title}</CardTitle>
                <div>
                  <div className="flex justify-between">
                  <p className="text-sm text-gray-600 text-start">Floor: {floorPrice} ETH</p>
                  <p className="text-sm text-gray-600 text-start">Token: {tokenNumber}</p>
                  </div>
                  <div >
                  <p className="text-sm text-gray-600 text-start">Volume: {totalVolume} ETH</p>
                  </div>
                </div>
               
              </CardContent>
            </Card>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 hover:opacity-100 transition duration-500"></div>
          </motion.div>
       
      </div>
      
    );
  };
  

  