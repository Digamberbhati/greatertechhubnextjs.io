import React from 'react'
import { SparklesCore } from '@/components/ui/sparkle'
import Button from '@/components/ui/button'
import HeroSection from '@/components/ui/hero'
import Banner from '@/components/ui/banner'

function It_Assets_Management() {
  return (
    <div>
      {/* hero-section */}
    <HeroSection
     title="IT Assets Management"
      imgurl="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041867.jpg?t=st=1725032655~exp=1725036255~hmac=83b12b1cb60f778415470f8695d3b76c3079d488ad603ca9feafa01a33d8e683&w=900"
      text="
These features help businesses optimize their IT asset management processes, reduce costs, and maintain a secure and efficient IT environment." /> 
        
        {/* service we provide section */}
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App Development</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Comprehensive Asset Tracking and Inventory Management:</h1>
                <p className="leading-relaxed mb-3"> The software provides a centralized platform to track all IT assets, including hardware, software, and network components, throughout their lifecycle. This helps businesses maintain an accurate inventory, monitor asset utilization, and manage warranties and maintenance schedules, reducing the risk of lost or underutilized assets.



</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">app dev</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Automated Compliance and License Management:</h1>
                <p className="leading-relaxed mb-3">The software automates the management of software licenses and compliance requirements, ensuring that all software installations are properly licensed and up-to-date. This reduces the risk of non-compliance with licensing agreements, avoids potential legal and financial penalties, and helps businesses optimize software spending by identifying unused or underused licenses.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Real-Time Monitoring and Alerts:</h1>
                <p className="leading-relaxed mb-3">The software integrates real-time monitoring tools to track the performance and health of IT assets. Automated alerts notify IT teams of potential issues, such as hardware failures or security vulnerabilities, before they escalate into major problems. This proactive approach enables businesses to maintain optimal performance, extend asset lifespan, and reduce downtime.</p>


              </div>
            </div>
          </div>
        </div>
      </section>


        {/* banner section */}
       <Banner title="Optimize IT and Assets for Maximum Efficiency."
       text1="Efficiently manage IT and assets with our service,"
       text2=" ensuring optimal performance, cost savings, and streamlined operations. "
       imgurl="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041866.jpg?t=st=1725032835~exp=1725036435~hmac=c7a156746b71d35628cc61eed64ed312608d683eb95bdf5ae84e50795113579b&w=900"/>


      
    </div>
  )
}

export default It_Assets_Management

