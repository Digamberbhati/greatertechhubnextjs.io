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
        <h1 className='py-10 pl-40'>Leverage Us for Your Best Cloud Strategy</h1>
        <p className='pl-40 '>Our Cloud Managed services make it possible for organizations to reduce their overheads and better productivity, in addition to lowering costs and reducing time-to-market. <br />

Veritis Cloud solutions have proven to help clients become more agile and responsive to changing market landscape. Our team of experts will work with you to understand your specific requirements and design a custom solution that meets your needs and budget. With our cloud services, you'll be able to focus on your core business while we take care of the rest.</p>

      </section>

      {/* outcome section */}
      <section className="text-gray-600 body-font mt-0">
        <div className="container px-2 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Public Cloud</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Our public cloud services offer online accessibility, scalability, cost-efficiency, and seamless deployment. Pay-as-you-go ensures payment for used resources, enhancing efficiency.</h1> */}
                <p className="leading-relaxed mb-3">Our public cloud services offer online accessibility, scalability, cost-efficiency, and seamless deployment. Pay-as-you-go ensures payment for used resources, enhancing efficiency.</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1 ">Private Cloud</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1> */}
                <p className="leading-relaxed mb-3">Our private cloud services enhance security and control for organizations with compliance needs, enabling complete data storage, maintenance, and access oversight.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Hybrid Cloud</h2>
                {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1> */}
                <p className="leading-relaxed mb-3">Our Hybrid cloud services offer the best of both worlds, combining the flexibility and scalability of public cloud services with the security and control of private cloud environments.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* stepper section */}
      {/* <div className="min-h-screen py-0 bg-gray-100">
        <section>
          <h2 className="text-4xl font-extrabold text-center text-gray-700">Dev Challenge</h2>
          <p className="text-center text-gray-600 text-md">Follow these steps to complete the projects .</p>
          <div className="content-center lg:flex lg:justify-center lg:items-center">


            <div className="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
              <div className="relative w-60 h-48">
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
 */}
 {/* stepper section */}
 <section>
<div className="mt-10">
  <div className="flex">
    
    <div className="w-1/4 text-center px-6">
      <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
        <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z"/></svg>
        </div>
        <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
          <h2 className="font-bold text-sm">Personal Info</h2>
          <p className="text-xs text-gray-600">
            Just your personal information
          </p>
        </div>
      </div>
    </div>
   
      <div className="flex-1 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>
      </div>
    <div className="w-1/4 text-center px-6">
      <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
        <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z"/></svg>
        </div>
        <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
          <h2 className="font-bold text-sm">Account Info</h2>
          <p className="text-xs text-gray-600">
            Anything you want for your credentials
          </p>
        </div>
      </div>
    </div>
    
      <div className="flex-1 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg> 
      </div>
    <div className="w-1/4 text-center px-6">
      <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
        <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
        </div>
        <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
          <h2 className="font-bold text-sm">Confirmation</h2>
          <p className="text-xs text-gray-600">
            Finish it!
          </p>
        </div>
      </div>
    </div>
    
      <div className="flex-1 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg> 
      </div>
    <div className="w-1/4 text-center px-6">
      <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
        <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
        </div>
        <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
          <h2 className="font-bold text-sm">Confirmation</h2>
          <p className="text-xs text-gray-600">
            Finish it!
          </p>
        </div>
      </div>
    </div>
     
  </div>
</div>
</section>

      {/* approach section */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-30 md:h-26 w-full object-cover object-center" src="https://s0.rbk.ru/v6_top_pics/resized/600xH/media/img/2/29/756657299319292.webp" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Microsoft 365 Migration Services.</h2>
                  {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Microsoft 365 Migration Services.</h1> */}
                  <p className="leading-relaxed mb-3">GREATERTECHHUB Microsoft 365 Managed Services can help you get the most out of your investment in Microsoft's cloud-based suite.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Contact Us
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span> */}
                    {/* <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://heise.cloudimg.io/width/1008/q70.png-lossy-70.webp-lossy-70.foil1/_www-heise-de_/imgs/18/3/6/2/6/5/3/8/Microsoft_365-3d2dbccc7b7417f0.jpeg" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Microsoft 365 Managed Services</h2>
                  {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Microsoft 365 Migration Services.</h1> */}
                  <p className="leading-relaxed mb-3">Our Microsoft 365 certified technicians are prepared to get your business acclimated to the leading-edge email platform painlessly and effectively.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Contact Us
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://t2.tudocdn.net/681516?w=646&h=284" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Microsoft Cloud Solutions Provider (CSP)</h2>
                  {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1> */}
                  <p className="leading-relaxed mb-3">As a Microsoft Cloud Solutions Provider, EMPIST is here to maximize the quality of your experience with the entire Microsoft Suite.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Contact Us
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span> */}
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
        {/* banner section */}
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

export default cloudServices
