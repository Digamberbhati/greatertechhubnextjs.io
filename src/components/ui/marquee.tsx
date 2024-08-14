'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { contain } from 'three/src/extras/TextureUtils.js'

const MarqueeComponent = () => {
    const [images, setImages] = useState([
        'https://greatertechhub.com/assets/img/clients/vrdental.png',
        'https://greatertechhub.com/assets/img/clients/certificationsmaster.jpg',
        'https://greatertechhub.com/assets/img/clients/logo2.png',
        'https://greatertechhub.com/assets/img/clients/mamta.jpeg',
        'https://greatertechhub.com/assets/img/clients/Logo.png',
        'https://greatertechhub.com/assets/img/clients/allaboutfoodist.jpeg',
        'https://greatertechhub.com/assets/img/clients/logo.jpg',
        'https://greatertechhub.com/assets/img/clients/5.jpg',
        'https://greatertechhub.com/assets/img/clients/vrdental.png',
        'https://greatertechhub.com/assets/img/clients/certificationsmaster.jpg',
        'https://greatertechhub.com/assets/img/clients/logo2.png',
        'https://greatertechhub.com/assets/img/clients/mamta.jpeg',
        'https://greatertechhub.com/assets/img/clients/Logo.png',
        'https://greatertechhub.com/assets/img/clients/allaboutfoodist.jpeg',
        'https://greatertechhub.com/assets/img/clients/logo.jpg',
        'https://greatertechhub.com/assets/img/clients/5.jpg',  
        
    ])

    return (
        <div className='w-full py-20 mt-32 overflow-hidden bg-white flex flex-col gap-8'>
            <Marquee pauseOnHover speed={70} >
            {images.map((item, index) => (
                <Image
                key={index}
                src={item}
                width={200}
                height={200}
                className='grayscale object-contain w-24 h-12 sm:w-32 sm:h-16 md:w-48 md:h-24 lg:w-64 lg:h-32'
                alt={`Image ${index + 1}`}
            />
                
                ))}
            </Marquee>

            <Marquee pauseOnHover direction='right' speed={70}>
            {images.map((item, index) => (
                    <Image
                    key={index}
                    src={item}
                    width={200}
                    height={200}
                    className='grayscale object-contain w-24 h-12 sm:w-32 sm:h-16 md:w-48 md:h-24 lg:w-64 lg:h-32'
                    alt={`Image ${index + 1}`}
                />
                
                ))}
            </Marquee>
        </div>
    )
}

export default MarqueeComponent
