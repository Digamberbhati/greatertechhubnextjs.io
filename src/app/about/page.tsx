"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Eyes from "@/components/Eyes";

const content = [
    {
      title: "Business Planning",
      description:
        "I'm here to help with any questions or guidance you need regarding business planning. What specific notice or query do you have related to Business Planning? Please feel free to ask, and I'll do my best to assist you.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Business Planning" className="h-full w-full object-cover object-center duration-100"/>
</div>

      ),
    },
    {
      title: "Financial Analaysis",
      description:
        "We provide market challenges analysis to help businesses identify and address the obstacles they face in their respective industries.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  <img src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbmFuY2lhbCUyMGFuYWx5c2lzfGVufDB8fDB8fHww" alt="Financial Analysis  " className="h-full w-full object-cover object-center duration-100"/>
</div>

      ),
    },
    {
      title: "Legal Advisory",
      description:
        "I'm here to assist you with any questions or guidance you need regarding legal advisory matters. What specific notice or query do you have related to Legal Advisory? Please feel free to ask, and I'll do my best to provide you with relevant information or suggestions",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <img src="https://plus.unsplash.com/premium_photo-1661333820879-517c5e808bfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF3eWVyfGVufDB8fDB8fHww" alt="Leagel Advisory" className="h-full w-full object-cover object-center duration-100" />
        </div>
      ),
    },
    {
      title: "Market Challenges",
      description:
        "We provide market challenges analysis to help businesses identify and address the obstacles they face in their respective industries.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFya2V0JTIwY2hhbGxlbmdlfGVufDB8fDB8fHww" alt="Market Challenges" className="h-full w-full object-cover object-center duration-100" />
        </div>
      ),
    },
  ];

const Aboutpage = () => {
  return (

    
    <>
    {/* <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Cutting-Edge Technology</span>
        </div>
        <div className="md:flex-grow">
          
          <p className="leading-relaxed"> We utilize the latest advancements in technology to ensure that our solutions are not only current but also future-proof. Our team stays ahead of industry trends to provide innovative and efficient IT solutions.</p>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Customized Solutions</span>
          
        </div>
        <div className="md:flex-grow">
          
          <p className="leading-relaxed">We understand that every business has unique needs. Our approach is highly personalized, offering tailored solutions that fit your specific requirements and help you achieve your business objectives effectively.</p>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Expert Team</span>
        </div>
        <div className="md:flex-grow">
         
          <p className="leading-relaxed">Our team of highly skilled and certified professionals brings a wealth of experience and expertise across various IT domains. We are committed to delivering top-notch service and support, ensuring your technology works seamlessly.</p>
        </div>
      </div>
    </div>
  </div>
</section> */}
    
    <div className='py-32  mx-auto min-h-[50vh] z-0'>
        <Eyes/>
        <div className="max-w-screen-lg mx-auto mt-20">

        <StickyScroll content={content} />
        </div>
    </div>
    </>
  )
}

export default Aboutpage
