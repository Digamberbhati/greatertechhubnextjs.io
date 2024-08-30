import React from 'react'
import HeroSection from '@/components/ui/hero'
import Banner from '@/components/ui/banner'

function webdevpage() {
  return (
    <div>
    {/* hero-section */}
     <HeroSection
     title="Web Development"
      imgurl="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      text="Elevate your business with our expert web development services. We create stunning, responsive websites tailored to your needs. Let’s build success together!" /> 
        
        {/* service we provide section */}
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App Development</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Frontend Development</h1>
                <p className="leading-relaxed mb-3"> Experience the future of web development with our expertise in using React, Next, SASS, Tailwind,Bootstrap and other modern technologies to deliver clean, responsive designs that work flawlessly across all platforms.

</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">app dev</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Backend Development</h1>
                <p className="leading-relaxed mb-3">Enhance your application's performance with our backend development services, utilizing modern technologies like Node.js and microservices to create scalable, efficient, and secure solutions for your business needs..</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Fullstack development</h1>
                <p className="leading-relaxed mb-3">
                Elevate your online presence with our comprehensive full stack web development. We craft innovative, high-performance websites with expert front-end and back-end solutions, tailored to drive your business forward.</p>


              </div>
            </div>
          </div>
        </div>
      </section>


        {/* banner section */}
       <Banner title="Crafting Your Digital Dreams with Precision and Passion"
       text1="Boost your online presence with our custom,"
       text2=" responsive websites designed to fit your business needs perfectly."
       imgurl="https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>


    </div>
  )
}

export default webdevpage

