'use client'

import { SparklesCore } from "@/components/ui/sparkle";
import Link from "next/link";

import React from "react";

const supportPage = () => {



  return (
    <div className="w-full min-h-screen relative" >

      <div className="w-full h-[180vh] absolute left-0 top-0 ">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF" />

          </div>

          <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-custom-heading">Support</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-custom-text">How can we help you?</p>
          </div>
          <div className="flex flex-wrap -m-2">

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-white-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/free-vector/email-icon-pin-isolated_1284-41831.jpg?t=st=1724584650~exp=1724588250~hmac=caaac64cd932a4db48a0bc98dd1334f12e033e1076f500d25e53258891984aa1&w=740" />
                <div className="flex-grow">
                  <h2 className="text-custom-text title-font font-medium">Email-Us</h2>
                  <p className="text-custom-text">Info@greatertechhub.com</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/free-vector/message-icon-pin-isolated_1284-41855.jpg?t=st=1724584748~exp=1724588348~hmac=3f83dafe602ea0d5cd54062764101958afa2577198e264cb76acab4d5baf5af0&w=740" />
                <div className="flex-grow">
                  <h2 className="text-custom-text title-font font-medium">Text-Us</h2>
                  <p className="text-custom-text">+91-9588160069</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/free-vector/call-center-concept-illustration_114360-2045.jpg?t=st=1724585052~exp=1724588652~hmac=9ff3ccf1375fac64e08012d0b986fa09da450d3400dc13d333c6b6eb98672f1f&w=740" />
                <div className="flex-grow">
                  <h2 className="text-custom-text title-font font-medium">Call Now</h2>
                  <p className="text-custom-text">Available via phone at 24×7.</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/free-vector/messenger-application-flat-style_23-2147792779.jpg?t=st=1724585462~exp=1724589062~hmac=01f096845fac5c16ed338f2817ad1f74f32cd8f486379a6382cdf90f6191c278&w=740" />
                <div className="flex-grow">
                  <h2 className="text-custom-text title-font font-medium">Chat Now</h2>
                  <p className="text-custom-text">Click to live chat</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/free-vector/file-synchronization-concept-illustration_114360-4237.jpg?t=st=1724585612~exp=1724589212~hmac=c7734886efd18e76969dc9be26125b49831e3202760c9dda9491d39f43d56558&w=740" />
                <div className="flex-grow">
                  <h2 className="text-custom-text title-font font-medium">Go Online</h2>
                  <p className="text-custom-text">Connect to support through our portal</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg?t=st=1724585928~exp=1724589528~hmac=e900f62c1aee0e0b8097b9d13d3c186d7c3ff78b9eb5d8f79329d857e74646e0&w=740" />
                <div className="flex-grow">
                  <h2 className="text-custom-text title-font font-medium">Mobile</h2>
                  <p className="text-custom-text">iOS  Android</p>
                </div>
              </div>
            </div>
         
          </div>
        </div>

        
      </section>


      <section className="text-gray-600  body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-custom-heading">Referral Program
      </h1>
      <p className="mb-8 leading-relaxed text-custom-text">We know personal recommendations carry a lot of weight, and we value our client's judgment. If you know anyone looking for assistance in the tech landscape, we're all ears!</p>
      <div className="flex justify-center">
        <Link href="/contact" className=" z-50 inline-flex text-custom-text bg-gray-800 hover:bg-transparent duration-300 py-2 px-6 focus:outline-none  rounded text-lg">Contact</Link>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 z-50 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/images/reffral.png"/>
    </div>
  </div>
</section>



    </div>
    



  );
};

export default supportPage;

