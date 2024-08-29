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
      text="we use reactjs, nextjs ,tailwind, bootstrap for our web development service " />

      {/* strategy section */}
      <section className='bg-white text-black h-96'>
        <h1 className='py-10 pl-5 pr-5'>Website development services company</h1>
        <p className='pl-5 pr-5'>If you're in search of top-quality web development services, you've come to the right place: a web site development services company. We're your ultimate destination for transforming your web dreams into reality. <br />

        Our expert team is highly skilled in web development, and equipped to craft stellar products tailored specifically to your business needs. At our company, we don't just build websites; we become your partners in success. With a proven track record of handling projects of all complexities, we're committed to delivering cutting-edge, customized web solutions that align perfectly with your business objectives. <Button /></p>
        
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

