'use client'
import React from 'react'
import Button from './button'

function Banner(props:any) {
  return (
    <div>
          <section className="text-white-600 body-font pr-5">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center pl-24">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">{props.title}
            </h1>
            <p className="mb-8 leading-relaxed">{props.text1}<br/>{props.text2}</p>
            <div className="flex justify-center">
              <Button text="Contact"/>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={props.imgurl} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
