"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
interface CardType {image:string, title:string, totalVolume:number,tokenNumber:number,floorPrice:number,category:string}
export default function NftCard ({image, title, totalVolume,tokenNumber,floorPrice, category}:CardType) {
    return (
      <div className="bg-[#2B2B2B]">
          <motion.div
            whileHover={{ scale:1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded shadow-lg "
          >
            <Card className="h-full bg-[#2B2B2B]">
              <Image
                src={image}
                alt={title}
                width={330}
                height={302}
                className="w-full h-48 object-cover p-1 rounded-t-md"
              />
              <CardContent className="p-4 ">
                <CardTitle className="text-lg text-white font-bold mb-2 ">{title}</CardTitle>
                <div>
                  <div className="flex justify-between">
                  <p className="text-sm text-[#858584] text-start">Floor: {floorPrice} ETH</p>
                  <p className="text-sm text-[#858584] text-start">Token: {tokenNumber}</p>
                  </div>
                  <div className="flex justify-between">
                  <p className="text-sm text-[#858584] text-start">Volume: {totalVolume} ETH</p>
                  <p className="text-sm text-[#858584] text-start"> {category}</p>
                  </div>
                </div>
               
              </CardContent>
            </Card>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 hover:opacity-100 transition duration-500"></div>
          </motion.div>
       
      </div>
      
    );
  };
  

  