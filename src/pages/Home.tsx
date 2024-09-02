"use client";
import React, { Component } from "react";
import ServicePage from "@/app/service/page";
import Aboutpage from "@/app/about/page";
import ClientPage from "@/app/client/page";
import  {ImagesSlider}  from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { OtherActivities } from "@/components/ui/otherActivities";




export default function Home() {
const images = [
    "https://images.unsplash.com/photo-1524868857876-218cafbdda8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1518107616985-bd48230d3b20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

   "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];   
  const words = [
    {
      text: "Tech",
    },
    {
      text: "Solutions",
    },
    {
      text: "for ",
    },
    {
      text: "Tomorrow’s",
    },
   
    {
      text: "Success.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

 
  return (  
    <>

<ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-l md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-0">
        <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-300 dark:text-neutral-100 text-base  mb-10">
      Smart Tech, Bright Futures
      </p>
      <TextGenerateEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        {<button  className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent duration-300 text-neutral-300 text-sm hover:bg-transparent hover:text-white">
          Join now
        </button>
       }
      </div>
    </div>
        
        </motion.p>
        
      </motion.div>
    </ImagesSlider>
      <Aboutpage/>
      <ServicePage/>
      <ClientPage/>
      <OtherActivities/>
  
  

    </>
  );


  };
 

 