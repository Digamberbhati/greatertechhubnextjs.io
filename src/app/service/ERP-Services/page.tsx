'use client'
import React from 'react'

import Banner from '@/components/ui/banner'
import HeroSection from '@/components/ui/hero'

function ERP_Services() {
  return (
    <div>
       {/* hero-section */}
    <HeroSection
     title="ERP"
      imgurl="https://img.freepik.com/premium-photo/erp-enterprise-resource-planning-software-modish-business-plan-marketing-strategy_31965-255915.jpg?w=1060"
      text="
These features help businesses streamline their operations, improve productivity, and enhance overall organizational performance." /> 
        
        {/* service we provide section */}
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App Development</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Centralized Data Management:</h1>
                <p className="leading-relaxed mb-3"> The software provides a unified platform that integrates all core business functions, such as finance, human resources, inventory, sales, and customer relationship management (CRM). This centralization of data ensures that all departments have access to the same up-to-date information, improving collaboration, reducing data silos, and enabling more informed decision-making across the organization.

</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">app dev</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Automated Workflow and Process Optimization:</h1>
                <p className="leading-relaxed mb-3">The software automates repetitive tasks and standardizes processes across the business, such as order processing, invoicing, and payroll. This reduces manual effort, minimizes errors, and accelerates task completion. By optimizing workflows, the software enables businesses to operate more efficiently and focus on strategic initiatives rather than administrative tasks.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Scalable and Customizable Solutions:</h1>
                <p className="leading-relaxed mb-3">The ERP software is designed to be scalable and customizable, allowing businesses to tailor the system to their specific needs and scale up as they grow. It can easily integrate with existing systems and adapt to changes in business processes, ensuring that the ERP solution continues to provide value as the business evolves.</p>


              </div>
            </div>
          </div>
        </div>
      </section>


        {/* banner section */}
       <Banner title="Streamline Success with ERP Solutions"
       text1="Optimize your operations with our ERP solutions—"
       text2="seamless integration, real-time data, and enhanced efficiency."
       imgurl="https://img.freepik.com/free-vector/erp-infographic_23-2149371099.jpg?t=st=1725032503~exp=1725036103~hmac=6a3da401d237cb594c62b04f4910aa03ddf7a635a907b45c2f8f0513f0eb97fb&w=740"/>


      
      </div>
  )
}

export default ERP_Services
