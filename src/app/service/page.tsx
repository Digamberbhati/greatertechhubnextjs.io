'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'
export const projects = [
  {
    title: "Web Development",
    description:
      "We provide professional web development services to help businesses establish a strong online presence and achieve their digital goals",
    link: "service/web-development-services",
  },
  {
    title: "App Development",
    description:
      "We specialize in developing custom, high-performance apps tailored to your specific needs. Our service ensures innovative solutions, seamless functionality, and exceptional user experience, making your app stand out in the market.",
    link: "service/app-development-service",
  },
  {
    title: "Digital Marketing ",
    description:
      "Our dedicated team of Social Media Marketing (SMM) & SEO experts is committed to helping our clients achieve higher rankings in search engine Results",
    link: "service/digital-marketing",
  },
  {
    title: "Market Analysis",
    description:
      "Our market analysis service delivers precise insights into industry trends, competitive landscapes, and consumer behavior. Tailored reports help you make informed decisions, identify opportunities, and stay ahead in your market. Boost your strategy with expert analysis.",
    link: "service/marketAnalysis",
  },
  {
    title: "Tax & Insurance",
    description:
      "Emphasize how your software solutions are designed to seamlessly integrate with tax and insurance processes, making it easier for businesses to manage their financial and compliance needs.",
    link: "service/tax-insurance",
  },
  {
    title: "Business Research",
    description:
      " Elevate your business with our comprehensive research services. We deliver actionable insights, market analysis, and strategic recommendations to drive growth and informed decision-making. Discover opportunities and optimize strategies with us.",
    link: "service/businessResearch",
  },
  {
    title: "Network and Infrastructure Services",
    description:
      "We deliver robust network and infrastructure solutions, ensuring seamless connectivity, security, and scalability. Our expert team designs, implements, and manages tailored systems for optimal performance and reliability.",
    link: "service/Network-and-Infrastructure-Services",
  },
  {
    title: "Cloud-Services",
    description:
      "GreaterTech-HUB offers cutting-edge scalable cloud solutions designed to grow with your business, ensuring flexibility and efficiency in all your operations, eliminating the need for costly hardware upgrades and minimizing downtime..",
    link: "service/cloud-services",
  },
  {
    title: "Enterprise Resource Planning (ERP) Services",
    description:
      "Transform your business with our ERP services. We deliver customized solutions that streamline processes, enhance productivity, and drive growth, tailored to your specific needs for optimal efficiency and performance.",
    link: "service/ERP-Services",
  },
  {
    title: "Customer Relationship Management (CRM) Services",
    description:
      "Our IT customer relationship management service offers seamless support, personalized solutions, and proactive strategies to enhance client satisfaction, streamline communication, and boost your business's efficiency and growth.",
    link: "service/CRM-Services",
  },
  {
    title: "IT Asset Management",
    description:
      "Streamline your IT operations with our expert IT asset management service. We ensure optimal utilization, secure tracking, and efficient lifecycle management of your hardware and software assets for peak performance.",
    link: "service/IT-Asset-Management",
  },
  {
    title: "DevOps Services",
    description:
      "Elevate your IT infrastructure with our DevOps services. We streamline development and operations, automate processes, and ensure continuous integration and delivery for faster, more reliable software deployment. Let’s optimize together!",
    link: "service/DevOps-Services",
  },

];

const ServicePage = () => {
  return (
    <div className=" max-w-5xl -z-10 py-32 mx-auto my-0  px-8">

      
    <h1 className='text-3xl text-[#F5EBEB]  w-full text-center py-8 font-semibold '>Our Services</h1>
    <HoverEffect items={projects} />
  </div>
  )
}

export default ServicePage
