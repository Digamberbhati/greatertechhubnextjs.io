"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React, { useEffect, useState } from "react";


export function InfiniteMovingCardsDemo() {
  return (
    
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="mt-10 text-center text-black text-3xl text-bold">Feedback</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
 
  {
    
    quote:
    "The IT services provided by the team are top-notch. They are always available to assist and resolve issues promptly.",
    name: "L.P Kapoor",
    title: "News media owner",
  },
  {
    quote:
      "I appreciate the proactive approach of the IT services team. They often identify and address issues before they become major problems.",
    name: "Ravi Kumar",
    title: "B2B business owner",
  },
  {
    quote: "The IT services team has been instrumental in implementing new technologies that have improved our productivity.",
    name: "Vishal",
    title: "Refast company Owner",
  },
  {
    quote:
      "While the IT services are generally good, there have been instances where the response time could have been faster.",
    name: "John Ray",
    title: "Freelancer",
  },
  {
    quote:
      "The digital marketing team has done a great job with our social media presence. The content is engaging and reflects our brand well.",
    name: "Rahul Rajput CDT",
    title: "Vr2020 Dental Designing Solutions & Digital Laboratory Pvt. Ltd company Owner",
  },
];
