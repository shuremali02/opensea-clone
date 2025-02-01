import { nftData } from '@/lib/data';
import React from 'react';
import NftCard from './card';
import ViewButton from './viewButton';
import Link from 'next/link';

function HomePageNFT() {

  return (
    <div className='flex  flex-col items-center '>
        <div className="flex items-center justify-center w-full bg-gray-100">
                <h1 className="md:text-7xl p-4 text-3xl sm:text-5xl font-bold hover:animate-pulse">
                   NFT&#39;s HUB
                </h1>
              </div>
                <div className='flex flex-col '>
                    <h1 className=' p-4 text-3xl font-bold flex justify-center'>By Category</h1>
                    <div className='flex gap-3 flex-col md:flex-row'>
                        <ViewButton  text={'Gaming'}  />
                        <ViewButton  text={'Meta'}  />
                        <ViewButton  text={'Top'}  />
                    </div>
                </div>
              <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {nftData?.map((item, index) => (
                    <Link key={index} href={`/drops/${item.tokenNumber}`}><NftCard key={index} {...item} /> </Link>   
                ))}
              </div>
                <div>
                <ViewButton text={"View More"} href={'/drops'}/>
                </div>
        
    </div>
  )
}

export default HomePageNFT;