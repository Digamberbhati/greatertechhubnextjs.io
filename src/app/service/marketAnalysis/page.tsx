import React from 'react'
import { SparklesCore } from "@/components/ui/sparkle";
import Button from '@/components/ui/button';
import Banner from '@/components/ui/banner';
import HeroSection from '@/components/ui/hero';

function marketAnalysis() {
  return (
    <div>
      {/* hero-section */}
      <HeroSection
     title="Market Analysis"
      imgurl="https://img.freepik.com/free-photo/3d-cartoon-scene-depicting-variety-people-multitasking_23-2151294463.jpg?t=st=1725014769~exp=1725018369~hmac=4d32a98bbb2e523c58ad3baa43721bfe569ed242b02471663ea062f95d6d595f&w=740"
      text="
These features provide businesses with a comprehensive view of the market landscape, helping them make strategic decisions based on accurate and timely data." /> 
        
        {/* service we provide section */}
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App Development</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Real-Time Data Aggregation and Analysis:</h1>
                <p className="leading-relaxed mb-3">The software collects and analyzes data from various sources, such as sales, customer behavior, and industry trends, in real-time. This capability provides businesses with up-to-date insights into market conditions, enabling them to respond quickly to changes and make informed decisions to stay competitive.

</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">app dev</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Advanced Predictive Analytics:</h1>
                <p className="leading-relaxed mb-3">The software uses machine learning algorithms and predictive analytics to forecast market trends and customer preferences. This helps businesses anticipate demand, optimize inventory, and tailor their marketing strategies to target the right audience, ultimately leading to increased sales and better market positioning.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Customizable Dashboards and Reporting:</h1>
                <p className="leading-relaxed mb-3">
                The software offers customizable dashboards and reports that allow businesses to visualize key performance indicators (KPIs) and market data in a way that is most relevant to their specific needs. This feature enables businesses to track their performance against market benchmarks, identify growth opportunities, and adjust their strategies accordingly to maximize their market share.</p>


              </div>
            </div>
          </div>
        </div>
      </section>


        {/* banner section */}
       <Banner title="Crafting Your Digital Dreams with Precision and Passion"
       text1="Boost your online presence with our custom,"
       text2=" "
       imgurl="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?t=st=1725014612~exp=1725018212~hmac=aebe8d7ee209e0f8470e0bb70119198987805af4928f67ba9ebcc6a882654f82&w=900"/>


      
    </div>
  )
}

export default marketAnalysis
