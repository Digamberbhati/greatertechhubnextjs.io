"use client";
import React,{ Component } from 'react'
import Banner from '@/components/ui/banner';
import HeroSection from '@/components/ui/hero';
function Devops_services() {
     
  return (
    <div>
    {/* hero-section */}
    <HeroSection
     title="DevOps"
      imgurl="https://img.freepik.com/premium-photo/devops-methodology-development-operations-agil-programming-technology-concept_29488-7673.jpg?w=1060"
      text="
These DevOps services help businesses streamline their development processes, ensure efficient operations, and maintain a high level of service quality." /> 
        
        {/* service we provide section */}
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App Development</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Continuous Integration and Continuous Deployment (CI/CD) Pipelines:</h1>
                <p className="leading-relaxed mb-3"> The software supports the automation of CI/CD pipelines, enabling seamless integration of code changes and automated deployment to production environments. This ensures faster and more reliable releases, reduces manual errors, and accelerates the development cycle, allowing businesses to deliver new features and updates to customers more quickly.

</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">app dev</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Infrastructure as Code (IaC):</h1>
                <p className="leading-relaxed mb-3">The software incorporates Infrastructure as Code (IaC) practices, allowing businesses to automate the provisioning and management of their infrastructure through code. This approach ensures consistency, reduces configuration drift, and makes infrastructure scalable and reproducible. IaC also simplifies the management of cloud environments and on-premises resources, enabling teams to quickly adapt to changing needs.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Automated Monitoring and Alerting:</h1>
                <p className="leading-relaxed mb-3">The software integrates with monitoring tools to provide real-time visibility into the performance and health of applications and infrastructure. Automated alerts notify teams of potential issues before they impact end-users, allowing for proactive resolution. This enhances the reliability and stability of applications, minimizes downtime, and improves overall user experience.</p>


              </div>
            </div>
          </div>
        </div>
      </section>


        {/* banner section */}
       <Banner title="Streamline Development, Accelerate Deployment, Achieve Excellence"
       text1="Our DevOps service streamlines development and"
       text2="operations for faster deployments, improved collaboration, and continuous delivery of high-quality software."
       imgurl="https://img.freepik.com/premium-photo/cloud-technology-concept-computing-data-storage-software-infrastructure_29488-7348.jpg?w=1060"/>


      
    </div>
  )
}

export default Devops_services
