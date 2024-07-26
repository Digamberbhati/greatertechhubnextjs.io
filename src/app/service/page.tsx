'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'
export const projects = [
  {
    title: "Web Development",
    description:
      "We provide professional web development services to help businesses establish a strong online presence and achieve their digital goals",
    link: "#",
  },
  {
    title: "App Development",
    description:
      "We provide professional APP development services to help businesses establish a strong online presence and achieve their digital goals.",
    link: "#",
  },
  {
    title: "Social Media Marketing (SMM)&SEO Projects",
    description:
      "Our dedicated team of Social Media Marketing (SMM) & SEO experts is committed to helping our clients achieve higher rankings in search engine Results",
    link: "#",
  },
  {
    title: "Market Analysis",
    description:
      "We provide market challenges analysis to help businesses identify and address the obstacles they face in their respective industries.",
    link: "#",
  },
  {
    title: "Tax & Insurance",
    description:
      "Emphasize how your software solutions are designed to seamlessly integrate with tax and insurance processes, making it easier for businesses to manage their financial and compliance needs.",
    link: "#",
  },
  {
    title: "Business Research",
    description:
      "I'm here to help with any questions or guidance you need regarding business planning. What specific notice or query do you have related to Business Planning? Please feel free to ask, and I'll do my best to assist you..",
    link: "#",
  },
];

const ServicePage = () => {
  return (
    <div className=" max-w-5xl -z-10 py-32 mx-auto  px-8">

      
    <h1 className='text-3xl text-[#F5EBEB]  w-full text-center font-semibold  '>Our Services</h1>
    <HoverEffect items={projects} />
  </div>
  )
}

export default ServicePage
