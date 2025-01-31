"use client";
import { nftData } from "../../lib/data";

import React, { useState } from "react";
import NftCard from "../Component/card";
import Link from "next/link";


export default function Nft() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Items per page

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nftData.slice(indexOfFirstItem, indexOfLastItem);
  // Calculate the total number of pages
  const totalPages = Math.ceil(nftData.length / itemsPerPage);
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="flex items-center justify-center  bg-gray-100">
        <h1 className="md:text-7xl p-4 text-3xl sm:text-5xl font-bold hover:animate-pulse">
          TOP NFT&#39;s
        </h1>
      </div>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {currentItems?.map((item, index) => (
        <Link href={`/drops/${item.tokenNumber}`}> <NftCard key={index} {...item} /></Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center p-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded-md ${
              currentPage === index + 1 ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
