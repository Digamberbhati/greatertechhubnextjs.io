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
                    loading='lazy'
                    key={index}
                    src={item}
                    style={{ aspectRatio: '3 / 2', objectFit: 'contain' }}
                    className='grayscale'
                    width={200}
                    height={100}
                    alt="All About"
                />
                
                ))}
            </Marquee>

            <Marquee pauseOnHover direction='right' speed={70}>
            {images.map((item, index) => (
                    <Image
                    key={index}
                    src={item}
                    style={{ aspectRatio: '3 / 2', objectFit: 'contain' }}
                    className='grayscale'
                    width={200}
                    height={100}
                    alt="All About"
                />
                
                ))}
            </Marquee>
        </div>
    )
}

export default MarqueeComponent
