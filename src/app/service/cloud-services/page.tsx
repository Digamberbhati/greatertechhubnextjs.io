"use client"
import React from 'react'
import { SparklesCore } from '@/components/ui/sparkle'
import { FullScreen } from '@tsparticles/engine'
import { AppleCardsCarouselDemo } from '@/components/ui/appleCardCaraousalDemo'
import Button from '@/components/ui/button'
import Steps from '@/components/ui/steps'
import Banner from '@/components/ui/banner'
import HeroSection from '@/components/ui/hero'


function cloudServices() {

  return (
    <div>
      <HeroSection
        title="App Development"

        imgurl="https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        text="Achieve your digital goals with our professional app development services.
      We provide innovative, user-centric solutions that enhance functionality and user experience. Connect with us to bring your app vision to life! "
      />

      {/* strategy section */}
      

      {/* outcome section */}
      <section className="text-gray-600 body-font mt-0">
        <div className="container px-2 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Public Cloud</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Our public cloud services offer online accessibility, scalability, cost-efficiency, and seamless deployment. Pay-as-you-go ensures payment for used resources, enhancing efficiency.</h1> */}
                <p className="leading-relaxed mb-3">Our public cloud services offer online accessibility, scalability, cost-efficiency, and seamless deployment. Pay-as-you-go ensures payment for used resources, enhancing efficiency.</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1 ">Private Cloud</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1> */}
                <p className="leading-relaxed mb-3">Our private cloud services enhance security and control for organizations with compliance needs, enabling complete data storage, maintenance, and access oversight.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Hybrid Cloud</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1> */}
                <p className="leading-relaxed mb-3">Our Hybrid cloud services offer the best of both worlds, combining the flexibility and scalability of public cloud services with the security and control of private cloud environments.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
 
      {/* approach section */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-30 md:h-26 w-full object-cover object-center" src="https://s0.rbk.ru/v6_top_pics/resized/600xH/media/img/2/29/756657299319292.webp" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Microsoft 365 Migration Services.</h2>
                  {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Microsoft 365 Migration Services.</h1> */}
                  <p className="leading-relaxed mb-3">GREATERTECHHUB Microsoft 365 Managed Services can help you get the most out of your investment in Microsoft's cloud-based suite.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Contact Us
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span> */}
                    {/* <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://heise.cloudimg.io/width/1008/q70.png-lossy-70.webp-lossy-70.foil1/_www-heise-de_/imgs/18/3/6/2/6/5/3/8/Microsoft_365-3d2dbccc7b7417f0.jpeg" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Microsoft 365 Managed Services</h2>
                  {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Microsoft 365 Migration Services.</h1> */}
                  <p className="leading-relaxed mb-3">Our Microsoft 365 certified technicians are prepared to get your business acclimated to the leading-edge email platform painlessly and effectively.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Contact Us
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://t2.tudocdn.net/681516?w=646&h=284" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Microsoft Cloud Solutions Provider (CSP)</h2>
                  {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1> */}
                  <p className="leading-relaxed mb-3">As a Microsoft Cloud Solutions Provider, EMPIST is here to maximize the quality of your experience with the entire Microsoft Suite.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Contact Us
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* solution section */}



      {/* benefits section */}

      <section className='bg-white text-black pl-16 py-20'>
        <h3 className='mb-10'>Value Proposition</h3>

        <h1 className='font-italic'>Future-proof your business with solutions tailored for you.</h1>
        <br />
        <ul>
          <li> Scalable resources</li>
          <br />
          <li>
          Partnering to product development process</li>
          <br />
          <li>
          Successfully building long term relationship </li>
          <br />
          <li> 
          Client centric processes and engagements</li>
          <br />
          <li> 
          Multiple technology experience</li>
          <br />
          <li> 
          Cost saving upto 50%</li>
          <br />
          
          <li>Allows client to focus on core business</li>
        </ul>
  
      </section>

{/* steps section */}
<Steps step1="one" 
       step2="two"
       step3="three" 
       step4="four" 
       finish="Finish"
       imgurl="https://images.unsplash.com/photo-1496450681664-3df85efbd29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      {/* banner section */}
     <Banner title="Cloud Power: Scalable Secure Simple"
     text1="Effortlessly scale your business with our secure,"
     text2=" reliable cloud services. Speed, flexibility, and peace of mind."





     imgurl="https://images.unsplash.com/photo-1536251062688-0185b521f349?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>

  )
}

export default cloudServices
