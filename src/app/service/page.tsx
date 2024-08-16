'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'
export const projects = [
  {
    title: "Web Development",
    description:
      "We provide professional web development services to help businesses establish a strong online presence and achieve their digital goals",
    link: "webdevPage",
  },
  {
    title: "App Development",
    description:
      "We provide professional APP development services to help businesses establish a strong online presence and achieve their digital goals.",
    link: "appdevPage",
  },
  {
    title: "Digital Marketing ",
    description:
      "Our dedicated team of Social Media Marketing (SMM) & SEO experts is committed to helping our clients achieve higher rankings in search engine Results",
    link: "digitalMarketing",
  },
  {
    title: "Market Analysis",
    description:
      "We provide market challenges analysis to help businesses identify and address the obstacles they face in their respective industries.",
    link: "marketAnalysis",
  },
  {
    title: "Tax & Insurance",
    description:
      "Emphasize how your software solutions are designed to seamlessly integrate with tax and insurance processes, making it easier for businesses to manage their financial and compliance needs.",
    link: "tax_insurance",
  },
  {
    title: "Business Research",
    description:
      "I'm here to help with any questions or guidance you need regarding business planning. What specific notice or query do you have related to Business Planning? Please feel free to ask, and I'll do my best to assist you..",
    link: "businessResearch",
  },
  {
    title: "Network and Infrastructure Services",
    description:
      "I'm here to help with any questions or guidance you need regarding business planning. What specific notice or query do you have related to Business Planning? Please feel free to ask, and I'll do my best to assist you..",
    link: "Network-and-Infrastructure-Services",
  },
  {
    title: "Cloud Services",
    description:
      "GreaterTech-HUB offers cutting-edge scalable cloud solutions designed to grow with your business, ensuring flexibility and efficiency in all your operations, eliminating the need for costly hardware upgrades and minimizing downtime..",
    link: "cloud-services",
  },
  {
    title: "Enterprise Resource Planning (ERP) Services",
    description:
      "I'm here to help with any questions or guidance you need regarding business planning. What specific notice or query do you have related to Business Planning? Please feel free to ask, and I'll do my best to assist you..",
    link: "ERP-Services",
  },
  {
    title: "Customer Relationship Management (CRM) Services",
    description:
      "I'm here to help with any questions or guidance you need regarding business planning. What specific notice or query do you have related to Business Planning? Please feel free to ask, and I'll do my best to assist you..",
    link: "CRM-Services",
  },
  {
    title: "IT Asset Management",
    description:
      "I'm here to help with any questions or guidance you need regarding business planning. What specific notice or query do you have related to Business Planning? Please feel free to ask, and I'll do my best to assist you..",
    link: "IT-Asset-Management",
  },
  {
    title: "DevOps Services",
    description:
      "I'm here to help with any questions or guidance you need regarding business planning. What specific notice or query do you have related to Business Planning? Please feel free to ask, and I'll do my best to assist you..",
    link: "DevOps-Services",
  },

];

const ServicePage = () => {
  return (
    <div className=" max-w-5xl -z-10 py-32 mx-auto  px-8">

      
    <h1 className='text-3xl text-[#F5EBEB]  w-full text-center py-8 font-semibold '>Our Services</h1>
    <HoverEffect items={projects} />
  </div>
  )
}

export default ServicePage
