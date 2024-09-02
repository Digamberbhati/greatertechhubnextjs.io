import Link from 'next/link';
import React from 'react'
import { FloatingDockDemo } from '@/components/ui/FooterComponent';
const Footer = () => {  
  return (
    <div className=' flex flex-col lg:flex-row justify-around pt-8 mt-4 items-start gap-8 px-12   py-3 tracking-tighter bg-gray-900 '>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl font-bold'>Greatertechhub</h1>
        <h3 className='font-light'>Social-media links</h3>  
        <div className='icons flex gap-2 '>
          <div className='mt-5'>
    <FloatingDockDemo/>
    </div>
        </div>
      </div>
      <div className='flex gap-20 flex-col lg:flex-row  '>
        <div>
          <h2 className='text-xl font-bold pb-4'>Useful Links</h2>
          <Link href={"/"} > <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Home</h4></Link>
          <Link href={"/about"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- About us</h4></Link>
          <Link href={"/service"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Service</h4></Link>
          <Link href={"/contact"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Contact us</h4></Link>
          {/* <Link href={"/terms-of-service"}> <h4>- Terms of Services</h4></Link> */}
          {/* <Link href={"/privacy-policy"}> <h4>- Privacy Policy</h4></Link> */}
        </div>
        <div>
          <h2 className='text-xl font-bold pb-4'>Helpful Links</h2>
          <Link href={"/careers"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Career</h4></Link>
          <Link href={"/event"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Event</h4></Link>
          <Link href={"/support"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Support</h4></Link>
        </div>

        <div>
          <h2 className='text-xl font-bold pb-4'>Legal Links</h2>
          <Link href={"/terms-of-service"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Term of service</h4></Link>
          <Link href={"/privacy-policy"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Privacy policy</h4></Link>
          
        </div>
        <div>
          <h2 className='text-xl font-bold pb-4'>Contact us</h2>
          <h4>Office No.12, 3rd FLoor Krishna Palace </h4>
          <h4>Ajronda Chowk , Sector 20B</h4>
          <h4>Faridabad ,Haryana 121001</h4>
          <h4>India</h4>
          <h4><b>Phone:</b> +91 9588160069</h4>
          <h4><b>Email:</b> info@greatertechhub.com</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer
