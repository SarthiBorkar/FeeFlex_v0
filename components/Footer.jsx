"use client"

import React from 'react'
import { motion } from "framer-motion"

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { GitHubLogoIcon, TwitterLogoIcon, DiscordLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'



const Footer = () => {
  return (
    <footer className="py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-evenly space-y-10 md:space-y-0">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-transparent text-white border-0">
              <CardHeader>
                <div className="flex flex-col space-y-4">
                  {/* <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <RocketIcon className='w-8 h-8'/>
                  </div> */}
                  <p className='text-sm md:text-md md:w-full'>FeeFlex is a seamless swap, which helps you pay gas fees with available tokens in your wallet. <br/><strong> No more On ramp!</strong></p>
                </div>
              </CardHeader>
              <CardContent className="flex space-x-4 mt-2">

              <motion.a
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  href="#"
                >
                  <GitHubLogoIcon width={32} height={32} className='text-white hover:text-green-500'/>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  href="#"
                >
                  <TwitterLogoIcon width={32} height={32} className='text-white hover:text-sky-400' />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  href="#"
                >
                  <LinkedInLogoIcon width={32} height={32} className='text-white hover:text-sky-600'/>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  href="#"
                >
                  <DiscordLogoIcon width={35} height={35} className='text-white hover:text-violet-500'/>
                </motion.a>
              </CardContent>
            </div>
          </div>
    <div className="flex flex-row sm:space-x-10 space-y-0 sm:space-y-0">
  <Card className="bg-white/10 text-white border-0 backdrop-blur-lg backdrop-filter bg-opacity-10">
    <CardHeader>
      <h3 className="font-semibold mb-2">Ecosystem</h3>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        <li className='hover:underline'><a href="#">DEX</a></li>
        <li className='hover:underline'><a href="#">Aggregator</a></li>
        <li className='hover:underline'><a href="#">Swap</a></li>
        <li className='hover:underline'><a href="#">Pools</a></li>
      </ul>
    </CardContent>
  </Card>
  <Card className="bg-white/10 text-white border-0 backdrop-blur-lg backdrop-filter bg-opacity-10 ">
    <CardHeader>
      <h3 className="font-semibold mb-2">Resources</h3>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        <li className='hover:underline'><a href="#">Foundation</a></li>
        <li className='hover:underline'><a href="#">Docs</a></li>
        <li className='hover:underline'><a href="#">Careers</a></li>
        <li className='hover:underline'><a href="#">Blog</a></li>
        <li className='hover:underline'><a href="#">Media kit</a></li>
      </ul>
    </CardContent>
  </Card>
</div>

        </div>
      </div>
      <Separator className="my-10" />
      <div className="container mx-auto px-4">
        <div className="bg-transparent text-white border-0">
          <CardFooter className="flex flex-col items-center text-center">
            <p className="text-xs">© 2024 FeeFlex! | All rights reserved | <a href="#" className="underline">Terms of Service</a> | <a href="#" className="underline">Privacy Policy</a></p>
            <p className="text-xs mt-4 font-thin">*Annual Percentage Yield (APY) data is provided from third party and publicly available information, is subject to change, may not be accurate or complete and may not reflect your actual earnings but rather the general network yields estimated to be applicable to all relevant network participants based on current conditions of the network, which may change. Presented rates are retrospective in nature and may not be indicative of future rates. APY data is provided for informational purposes only and should not be relied on.</p>
       
          </CardFooter>
        </div>
      </div>
    </footer>
  )
}

export default Footer
