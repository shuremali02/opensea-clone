import { nftData } from '@/lib/data'
import React from 'react'
import NftCard from './card'
import ViewButton from './viewButton'

function HomePageNFT() {

  return (
    <div>
        <div className="flex items-center justify-center bg-gray-100">
                <h1 className="md:text-7xl p-4 text-3xl sm:text-5xl font-bold hover:animate-pulse">
                  TOP NFT&#39;s
                </h1>
              </div>
              <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {nftData?.map((item, index) => (
                  <NftCard key={index} {...item} />
                ))}
              </div>

              <ViewButton />
        
    </div>
  )
}

export default HomePageNFT