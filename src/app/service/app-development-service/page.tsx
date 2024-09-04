"use client";
import React, { Component } from "react";
import HeroSection from "@/components/ui/hero";
import Banner from "@/components/ui/banner";


export default function appdevPage() {

  return (
    <>
      <HeroSection
        title="App Development"

        imgurl="https://images.unsplash.com/photo-1561883088-039e53143d73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        text="Achieve your digital goals with our professional app development services.
      We provide innovative, user-centric solutions that enhance functionality and user experience. Connect with us to bring your app vision to life! "
      />

      {/* service in app development */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App Development</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Custom App Development</h1>
                <p className="leading-relaxed mb-3">We specialize in developing bespoke applications tailored to your unique business requirements. Whether you need a complex enterprise solution or a simple tool to enhance productivity, our team will build a custom app that aligns perfectly with your goals and integrates seamlessly with your existing systems.</p>
              </div>
            </div>

            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">app dev</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Mobile App Development</h1>
                <p className="leading-relaxed mb-3">Our mobile app development services focus on creating high-performance applications for iOS and Android platforms. We ensure that your app provides a seamless experience across different devices and operating systems.</p>
              </div>
            </div>

            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">App Maintenance & Support</h1>
                <p className="leading-relaxed mb-3">We provide ongoing maintenance and support to ensure your app continues to perform optimally and remains up-to-date with the latest technologies and security standards</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* banner section */}
      
      <Banner title="Empower Your App Dreams."
        text1="Expert app development services to turn your vision into reality"
        text2=" Custom solutions for every need." 
       imgurl="https://img.freepik.com/free-photo/group-colleagues-wearing-protective-face-masks-fist-bumping-while-having-business-meeting-coronavirus-pandemic_637285-6698.jpg?t=st=1724393302~exp=1724396902~hmac=99e66d9333e97ba69b6af4008eca9b9143edb4d7ca44c4910a0ae8918bacd9a7&w=826"
        />

    </>
  )


};


