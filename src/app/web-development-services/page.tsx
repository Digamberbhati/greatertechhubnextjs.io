import React from 'react'
import { SparklesCore } from '@/components/ui/sparkle'
import Button from '@/components/ui/button'
import HeroSection from '@/components/ui/hero'

function webdevpage() {
  return (
    <div>
    
    <HeroSection
     title="Web Development"
      imgurl="https://images.unsplash.com/photo-1691435828932-911a7801adfb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      text="Elevate your business with our expert web development services. We create stunning, responsive websites tailored to your needs. Let’s build success together!" />

      {/* strategy section */}
      <section className="p-4 bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Responsive Text Section
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-700">
          This is a responsive text section that adjusts its font size based on the screen width. Use Tailwind's responsive utility classes to ensure a pleasant reading experience on all devices.
        </p>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600">
          Tailwind CSS makes it easy to create responsive designs without writing custom media queries. Enjoy the power of utility-first styling!
        </p>
      </div>
    </section>
        
    
        {/* outcome section */}
        <section className="text-gray-600 body-font mt-0">
        <div className="container px-2 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Front-end Development</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Our public cloud services offer online accessibility, scalability, cost-efficiency, and seamless deployment. Pay-as-you-go ensures payment for used resources, enhancing efficiency.</h1> */}
                <p className="leading-relaxed mb-3">We use the most popular frontend frameworks like React.js, Vue.js, Angular.js, Next.js, Three.js ,TailwindCSS, Bootstrap that enable us to create the surface layer of your product.</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1 ">Backend Development</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1> */}
                <p className="leading-relaxed mb-3">We use server-side technologies like Python, Ruby on Rails, and Node.js for prototyping and development, producing fast and scalable web apps
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Full Stack Development.</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1> */}
                <p className="leading-relaxed mb-3">We deliver end-to-end web development, combining frontend and backend solutions and other technologies necessary to make your product a success.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* stepper section */}
 
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

        {/* banner section */}
        <section className="text-white-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center pl-24">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">Discover The Power of Real Partnership
            </h1>
            <p className="mb-8 leading-relaxed">Ready to take your business to the next level? <br />Schedule a free consultation with our team to discover how we can help!</p>
            <div className="flex justify-center">
              <Button />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-photo/group-colleagues-wearing-protective-face-masks-fist-bumping-while-having-business-meeting-coronavirus-pandemic_637285-6698.jpg?t=st=1724393302~exp=1724396902~hmac=99e66d9333e97ba69b6af4008eca9b9143edb4d7ca44c4910a0ae8918bacd9a7&w=826" />
          </div>
        </div>
      </section>


    </div>
  )
}

export default webdevpage

