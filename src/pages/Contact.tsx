import React from 'react'
import { WavyBackground } from "@/components/ui/wavy-background";


const Contact = () => {
  return (
    <div>
      <WavyBackground className="max-w-full mx-auto pb-20 flex flex-col items-center justify-between ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Contact Us
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>

      <div className='bg-transparent text-white  top-[20%] z-40 w-2/3'>
        <form action="/submit-form" method="post" className='flex gap-4 bg-transparent  backdrop-blur-sm w-full flex-col p-4 rounded-lg mt-20 border border-zinc-600'>
          <div className='w-full flex flex-col'>
            <label htmlFor="name" className='w-[20%] text-lg font-sm'>Name</label>
            <input id="name" className='w-full p-2 mt-2 rounded-lg bg-transparent border' type="text" name="name" />
          </div>

          <div className='w-full flex flex-col'>
            <label htmlFor="email" className='w-[20%] text-lg font-sm'>Email</label>
            <input id="email" className='w-full p-2 mt-2 rounded-lg bg-transparent border' type="email" name="email" />
          </div>

          <div className='w-full flex flex-col'>
            <label htmlFor="message" className='w-[20%] text-lg font-sm'>Message</label>
            <textarea id="message" className='w-full p-2 mt-2 rounded-lg bg-transparent border' name="message"></textarea>
          </div>

          <button className="inline-flex h-12 animate-shimmer w-1/3 items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
Submit
      </button>
        </form>
      </div>
    </WavyBackground>

    <div className="overflow-hidden bg h-[100] relative pb-[30%]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.4713533848752!2d77.31076921724093!3d28.3925286971835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd193b9fc4b1%3A0x507e6415a7ae5df0!2sVr2020%20Dental%20Designing%20Solutions%20%26%20Digital%20Laboratory%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1721973947907!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="eager" referrerPolicy="no-referrer-when-downgrade" className="border-0 h-full w-full absolute left-0 bottom-0"></iframe>
    </div>
    </div>
  )
}

export default Contact
