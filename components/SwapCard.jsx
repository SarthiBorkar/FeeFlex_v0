"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';

const SwapCard = () => {
  const [sellAmount, setSellAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);

  return (
    <div className=" text-white rounded-lg p-6 max-w-lg  mx-auto space-y-1 shadow-lg mt-16 bg-white/10 backdrop-blur-lg backdrop-filter bg-opacity-70">
      {/* Sell Section */}
      <div className="flex justify-between items-center bg-black rounded-lg p-4 space-x-4 h-32">
        <div className="flex-1">
          <p className="text-gray-400 text-lg">Sell</p>
          <input
            type="text"
            className="w-full bg-transparent text-2xl font-semibold outline-none"
            placeholder="0"
            value={sellAmount}
            onChange={(e) => setSellAmount(parseFloat(e.target.value) || 0)}
          />
        </div>
        <Select>
          <SelectTrigger className="bg-[#343434] text-white rounded-full px-3 py-1 flex items-center space-x-2 w-32">
           
            <SelectValue placeholder="ETH" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ETH">ETH</SelectItem>
            <SelectItem value="BTC">BTC</SelectItem>
            <SelectItem value="SOL">SOL</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Swap Arrow Button */}
      


  

      {/* Buy Section */}
      <div className="flex justify-between items-center bg-black rounded-lg p-4 space-x-4 h-32">
        <div className="flex-1">
          <p className="text-gray-400 text-lg">Buy</p>
          <input
            type="text"
            className="w-full bg-transparent text-2xl font-semibold outline-none"
            placeholder="0"
            value={buyAmount}
            onChange={(e) => setBuyAmount(parseFloat(e.target.value) || 0)}
          />
        </div>
        <Select>
          <SelectTrigger className="bg-[#343434]  rounded-full px-3 py-1 flex items-center space-x-2 w-32">
            <SelectValue placeholder="Select token" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ETH">ETH</SelectItem>
            <SelectItem value="BTC">BTC</SelectItem>
            <SelectItem value="USDT">USDT</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full bg-white text-black text-lg py-3 rounded-xl hover:bg-emerald-50 ">
        Swap
      </Button>
    </div>
  );
};

export default SwapCard;
