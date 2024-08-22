"use client"
import React from 'react'
import { SparklesCore } from '@/components/ui/sparkle'  
import { FullScreen } from '@tsparticles/engine'
import { AppleCardsCarouselDemo } from '@/components/ui/appleCardCaraousalDemo'
import Button from '@/components/ui/button'


function cloudServices() {

  return (
    <div>
        <div>
          <img src='https://s7ap1.scene7.com/is/image/TCSCOMprod/modernized-underwriting-platform-insurance-solution-cloud?wid=1900&hei=727&dpr=off' alt='image' height={500} width={1600}></img>

        </div>

        {/* strategy section */}
        <section className='bg-white text-black h-96'>
          <h1 className='py-10 pl-40'>Strategy to scale</h1>
          <p className='pl-40 '>Your company has a unique purpose and growth journey. That's why you <br /> need a distinct cloud strategy to take advantage of breakthrough <br /> technologies, scale rapidly, and seize emerging opportunities. Gretertechhub can help <br /> you drive business value, build resilience, and advance your goals of <br /> transformation, adaptation, and innovation for a reimagined future.</p>

        </section>

        {/* outcome section */}
        <section className="text-gray-600 body-font mt-0">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">SEO</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
                  <p className="leading-relaxed mb-3">Boost your online presence with our top-notch SEO services! We specialize in optimizing your website to rank higher on search engines, drive organic traffic, and enhance user engagement. Our expert team uses cutting-edge strategies and tools to deliver measurable results. Contact us today to elevate your digital success!.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1 ">Social media marketing</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
                  <p className="leading-relaxed mb-3">Elevate your brand with our expert social media marketing services! We craft tailored strategies to boost engagement, grow your audience, and drive conversions across platforms. From compelling content creation to targeted ad campaigns, our team ensures your brand stands out. Partner with us to maximize your social media impact today!
                  </p>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">WhatsApp marketing</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                  <p className="leading-relaxed mb-3">Maximize your outreach with our professional WhatsApp marketing services. We deliver targeted, personalized messaging campaigns to engage customers, drive conversions, and foster loyalty. Utilizing WhatsApp's advanced features, our expert team ensures effective, real-time communication tailored to your business needs. Elevate your marketing strategy and connect with clients seamlessly.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

{/* stepper section */}
<div className="min-h-screen py-0 bg-gray-100">
    <section>
        <h2 className="text-4xl font-extrabold text-center text-gray-700">Dev Challenge</h2>
        <p className="text-center text-gray-600 text-md">Follow these steps to complete the challenge.</p>
        <div className="content-center lg:flex lg:justify-center lg:items-center">

          
            <div className="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                <div className="relative w-64 h-48">
                    <div
                        className="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                        <div className="w-1/3 h-40"></div>
                        <div className="w-2/3 h-32 pr-4">
                            <h3 className="pt-1 text-xl font-semibold text-gray-700">Design</h3>
                            <p className="pt-1 text-sm text-gray-600">Design is how the solution will be interacted with.</p>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                        <svg className="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                            viewBox="0 0 24 24" fill="#38a169" width="32px" height="32px">
                            <g>
                                <rect fill="none" height="24" width="24" />
                            </g>
                            <g>
                                <g>
                                    <path
                                        d="M6.36,18.78L6.61,21l1.62-1.54l2.77-7.6c-0.68-0.17-1.28-0.51-1.77-0.98L6.36,18.78z" />
                                    <path
                                        d="M14.77,10.88c-0.49,0.47-1.1,0.81-1.77,0.98l2.77,7.6L17.39,21l0.26-2.22L14.77,10.88z" />
                                    <path
                                        d="M15,8c0-1.3-0.84-2.4-2-2.82V3h-2v2.18C9.84,5.6,9,6.7,9,8c0,1.66,1.34,3,3,3S15,9.66,15,8z M12,9c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C13,8.55,12.55,9,12,9z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div
                        className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-green-600 rounded-lg">
                        02</div>
                    <div className="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-green-600"></div>
                </div>
            </div>
            <div className="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                <div className="relative w-64 h-48">
                    <div
                        className="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                        <div className="w-1/3 h-40"></div>
                        <div className="w-2/3 h-32 pr-4">
                            <h3 className="pt-1 text-xl font-semibold text-gray-700">Develop</h3>
                            <p className="pt-1 text-sm text-gray-600">Submit a developed solution to the given problem sets.</p>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                        <svg className="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3182ce"
                            width="32px" height="32px">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                        </svg>
                    </div>
                    <div
                        className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-blue-600 rounded-lg">
                        03</div>
                    <div className="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-blue-600"></div>
                </div>
            </div>
            <div className="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                <div className="relative w-64 h-48">
                    <div
                        className="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                        <div className="w-1/3 h-40"></div>
                        <div className="w-2/3 h-32 pr-4">
                            <h3 className="pt-1 text-xl font-semibold text-gray-700">Analyse</h3>
                            <p className="pt-1 text-sm text-gray-600">Analyse the problem sets to find a better solution to the issue.</p>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                        <svg className="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e53e3e"
                            width="32px" height="32px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                    </div>
                    <div
                        className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-red-600 rounded-lg">
                        01</div>
                    <div className="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-red-600"></div>
                </div>
            </div>
            <div className="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                <div className="relative w-64 h-48">
                    <div
                        className="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                        <div className="w-1/3 h-40"></div>
                        <div className="w-2/3 h-32 pr-4">
                            <h3 className="pt-1 text-xl font-semibold text-gray-700">Analyse</h3>
                            <p className="pt-1 text-sm text-gray-600">Analyse the problem sets to find a better solution to the issue.</p>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                        <svg className="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e53e3e"
                            width="32px" height="32px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                    </div>
                    <div
                        className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-red-600 rounded-lg">
                        01</div>
                    <div className="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-red-600"></div>
                </div>
            </div>
            <div className="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                <div className="relative w-64 h-48">
                    <div
                        className="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                        <div className="w-1/3 h-40"></div>
                        <div className="w-2/3 h-32 pr-4">
                            <h3 className="pt-1 text-xl font-semibold text-gray-700">Analyse</h3>
                            <p className="pt-1 text-sm text-gray-600">Analyse the problem sets to find a better solution to the issue.</p>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                        <svg className="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e53e3e"
                            width="32px" height="32px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                    </div>
                    <div
                        className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-red-600 rounded-lg">
                        01</div>
                    <div className="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-red-600"></div>
                </div>
            </div>
           
        </div>
    </section>
</div>


        {/* approach section */}

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
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
          <h3 className='mb-10'>Benefits</h3>

          <h1 className='font-bold'>Future-proof your business with solutions tailored for you.</h1>
          <br />
          <ul>
            <li> Reimagine new possibilities for your business.</li>
            <br />
            <li>Transform, adapt, and grow with purpose-led ecosystems. </li>
            <br />
            <li> Create new business models and scale rapidly. </li>
            <br />
            <li> Take advantage of new technologies</li>
            <br />
            <li>Accelerate innovation and unlock new growth potential.</li>
          </ul>
          {/* banner section */}
        </section>

        {/* banner section */}
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center pl-24">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let’s make the cloud connect
              </h1>
              <p className="mb-8 leading-relaxed">No matter where you are on your cloud journey, <br />we can help you get maximum value from it.</p>
              <div className="flex justify-center">
               <Button/>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="https://s7ap1.scene7.com/is/image/TCSCOMprod/footer-cta-image?wid=1000&hei=725&dpr=off" />
            </div>
          </div>
        </section>
      </div>
  
  )
}

export default cloudServices
