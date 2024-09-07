
'use client'
import React from 'react'
import "./page.css";

import HeroSection from '@/components/ui/hero';
import Banner from '@/components/ui/banner';


function businessResearch() {
  return (
   <div>
      {/* hero-section */}
    <HeroSection

     title="Business Research"
      imgurl="https://img.freepik.com/premium-photo/person-is-holding-magnifying-glass-with-word-technology-it_1161029-6504.jpg?w=1060"
      text="
These features help businesses conduct thorough and effective research, leading to better strategic decisions and a stronger competitive position in the market." /> 
        
        {/* service we provide section */}
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App Development</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Data Aggregation and Analysis: </h1>
                <p className="leading-relaxed mb-3"> The software collects and aggregates data from multiple sources such as market reports, social media, customer surveys, and financial statements. This comprehensive data collection provides businesses with a 360-degree view of the market landscape, customer preferences, and competitive dynamics, enabling more informed strategic planning and decision-making.



</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">app dev</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Advanced Analytical Tools and AI Integration:</h1>
                <p className="leading-relaxed mb-3">Leveraging advanced analytics and artificial intelligence (AI), the software can identify patterns, trends, and correlations within large datasets. This capability allows businesses to predict future market behaviors, understand customer sentiment, and identify potential growth opportunities. AI-driven insights can help companies tailor their products, services, and marketing strategies to better meet customer needs and stay ahead of the competition.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Customizable Reporting and Visualization: </h1>
                <p className="leading-relaxed mb-3">The software offers customizable reporting and data visualization tools, making it easy for businesses to present complex data in an understandable format. Interactive dashboards and visualizations enable stakeholders to explore different scenarios, track key performance indicators (KPIs), and gain actionable insights. This feature supports better communication and alignment across teams, fostering a more agile and responsive organizational culture.</p>


              </div>
            </div>
          </div>
        </div>
      </section>


        {/* banner section */}
       <Banner title="Empowering Decisions with Insightful Research"
       text1="Optimize your strategy with precise business research."
       text2=" We deliver actionable insights to propel your success and competitive edge."
       imgurl="https://img.freepik.com/premium-photo/person-is-looking-magnifying-glass-that-has-blue-graph-it_1274269-148914.jpg?w=900"/>


      
    </div>
  )
}

export default businessResearch
