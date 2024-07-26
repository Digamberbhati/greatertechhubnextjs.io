import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
const Footer = () => {  
  return (
    <div className=' flex flex-col lg:flex-row justify-between items-start gap-10 px-12   py-3 tracking-tighter'>
      <div className='flex flex-col gap-2 '>
        <h1 className='text-4xl font-bold'>Greatertechhub</h1>
        <h3 className='font-light'>Social-medialinks</h3>  
        <div className='icons flex gap-2 '>
        <Link href={"https://wa.me/+919588160069"} className='bg-zinc-800  rounded-full p-2 h-8' ><FaWhatsapp className='font-2xl' /></Link>
        <Link href={"https://wa.me/+919588160069"} className='bg-zinc-800  rounded-full p-2 h-8' ><IoLogoTwitter className='font-2xl' /></Link>
        <Link href={"https://wa.me/+919588160069"} className='bg-zinc-800  rounded-full p-2 h-8' ><FaFacebook className='font-2xl' /></Link>
        <Link href={"https://wa.me/+919588160069"} className='bg-zinc-800  rounded-full p-2 h-8' ><LuInstagram className='font-2xl' /></Link>
        <Link href={"https://wa.me/+919588160069"} className='bg-zinc-800  rounded-full p-2 h-8' ><FaLinkedinIn className='font-2xl' /></Link>
        </div>
      </div>
      <div className='flex gap-20 flex-col lg:flex-row '>
        <div>
          <h2 className='text-xl font-bold pb-4'>Useful Links</h2>
          <Link href={"/"}> <h4>- Home</h4></Link>
          <Link href={"/about"}> <h4>- About us</h4></Link>
          <Link href={"/service"}> <h4>- Service</h4></Link>
          <Link href={"/terms-of-service"}> <h4>- Terms of Services</h4></Link>
          <Link href={"/privacy-policy"}> <h4>- Privacy Policy</h4></Link>
        </div>
        <div>
          <h2 className='text-xl font-bold pb-4'>Our Service</h2>
          <Link href={"/blog"}> <h4>- Blog</h4></Link>
          <Link href={"/event"}> <h4>- Event</h4></Link>
          <Link href={"/faq"}> <h4>- FQA</h4></Link>
        </div>
        <div>
          <h2 className='text-xl font-bold pb-4'>Contact us</h2>
          <h4>Office No.12, 3rd FLoor Krishna Palace </h4>
          <h4>Ajronda Chowk , Sector 20B</h4>
          <h4>Faridabad ,Haryana 121001</h4>
          <h4>India</h4>
          <h4><b>Phone:</b> +91 9588160069</h4>
          <h4><b>Email:</b> Greatertechhub@gmail.com</h4>
          <h4>info@greatertechhub.com</h4>

        </div>
      </div>
    </div>
  )
}

export default Footer
