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
              <div className="h-full bg-white text-xs bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-2xs title-font font-medium text-gray-600 mb-1">Front-end Development</h2>
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
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Low-Code Development.</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1> */}
                <p className="leading-relaxed mb-3">We also specialize in building no-code and low-code web solutions that allow clients to save time and money. We use platforms like Webflow or Mendix.</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Cloud Development</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1> */}
                <p className="leading-relaxed mb-3">Furthermore, we use cloud services like Google Cloud, Amazon Web Services, and Microsoft Azure for fast and secure application deployment.</p>
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
{/* steps */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
            <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
            <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
            <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
          </div>
        </div>
      </div>
      <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step"/>
    </div>
  </div>
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

