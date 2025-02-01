import React from 'react'
import { nftData } from '@/lib/data';

export default function TokenId({ params,}: {params: { id:string};
  }) {
    const parsedId =parseInt(params.id)
    const matchid =nftData.find((post) => post.tokenNumber === parsedId); // Find the blog post with the corresponding ID
  console.log(matchid)
    if (!matchid) {
      return <div className="text-red-500 text-center mt-10 bg-black max-h-screen">Data Not Found</div>;
    }
  return (
    <div>
   {matchid.description} 

    </div>
  )
}
