import React from 'react'
import HeroSection from '@/components/ui/hero'
import Banner from '@/components/ui/banner'

function CRM_services() {
  return (
    <div>
   {/* hero-section */}
   <HeroSection
     title="CRM"
      imgurl="https://img.freepik.com/free-photo/customer-relationship-management-concept_23-2150038410.jpg?t=st=1725037161~exp=1725040761~hmac=949c839d0626d880f5733e886c2b9f16d5ae965dfe074451c0fca83df9b3d59d&w=900"
      text="
These CRM services help businesses build stronger relationships with their customers, improve operational efficiency, and drive revenue growth." /> 
        
        {/* service we provide section */}
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App Development</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Centralized Customer Data Management:</h1>
                <p className="leading-relaxed mb-3"> The software consolidates customer information from multiple channels, including email, social media, and sales interactions, into a single, unified database. This centralized approach ensures that all departments have access to up-to-date customer data, improving collaboration across teams and enabling more personalized and effective customer interactions.



</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">app dev</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Automated Sales and Marketing Workflows:</h1>
                <p className="leading-relaxed mb-3">The software automates key sales and marketing tasks, such as lead scoring, email campaigns, and follow-up reminders. This helps sales teams prioritize leads based on engagement and likelihood to convert, while marketing teams can tailor their campaigns to target specific customer segments. Automation reduces manual workload, minimizes errors, and enhances the overall efficiency of customer engagement efforts.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Advanced Analytics and Customer Insights:</h1>
                <p className="leading-relaxed mb-3">The software provides advanced analytics tools that allow businesses to analyze customer behavior, track sales performance, and measure the effectiveness of marketing campaigns. By leveraging these insights, companies can identify trends, understand customer needs, and optimize their strategies to improve customer satisfaction, loyalty, and lifetime value.</p>


              </div>
            </div>
          </div>
        </div>
      </section>


        {/* banner section */}
       <Banner title="Your CRM for Lasting Relationships"
       text1="Optimize client interactions and drive growth"
       text2="  with our CRM solution for seamless relationship management and success."




       imgurl="https://img.freepik.com/free-photo/customer-relationship-management-concept_23-2150038411.jpg?t=st=1725037521~exp=1725041121~hmac=a4a91e7a5b59a2046ae1fde68b424f5bcb3c30498ef22a8d7a10624fde1ecfcf&w=900"/>


      
    </div>
  )
}

export default CRM_services
