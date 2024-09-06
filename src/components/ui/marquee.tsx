'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'


const MarqueeComponent = () => {
    

    const [images, setimages] = useState([
        "/images/clients/vrdental.png",
        "/images/clients/allaboutFoodist.png",
        "/images/clients/certificate.png",
        "/images/clients/ingo.png",
        "/images/clients/krgroups.png",
        "/images/clients/krishi.png",
        "/images/clients/mamta.png",
        "/images/clients/sfci.png",
        "/images/clients/sofsecure.png",
        "/images/clients/auto.png",
        "/images/clients/lokesh.png",
        "/images/clients/vrdental.png",
        "/images/clients/allaboutFoodist.png",
        "/images/clients/certificate.png",
        "/images/clients/ingo.png",
        "/images/clients/krgroups.png",
        "/images/clients/krishi.png",
        "/images/clients/mamta.png",
        "/images/clients/sfci.png",
        "/images/clients/sofsecure.png",
        "/images/clients/auto.png",
        "/images/clients/lokesh.png",
      

    ])

    return (
        <div className='w-full py-20 overflow-hidden  flex flex-col gap-8'>
            <Marquee pauseOnHover speed={70} >
            {images.map((item, index) => (
                <Image
                key={index}
                src={item}
                width={200}
                height={200}
                className='grayscale object-contain w-24 h-12 sm:w-32 sm:h-16 md:w-48 md:h-24 lg:w-64 lg:h-32 hover:grayscale-0 duration-200 '
                alt={`Image ${index + 1}`}
            />
                
                ))}
            </Marquee>

            
        </div>
    )
}

export default MarqueeComponent
