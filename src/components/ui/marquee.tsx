'use client'

import { useState } from "react"
import { div } from "three/examples/jsm/nodes/Nodes.js"

import Image from "/vrdental.png"

const marquee = () => {

    const [elements, setelements] = useState([
        {
            "id": 1,
        "url" :"/vrdental.png"
        },

        {
            "id": 2,
        "url" :"/master.png"},

        {
            "id": 3,
        "url" :"/sof.png"
        },


        {
            "id": 4,
        "url" :"/mamta.png"
        },

        {
            "id": 6,
        "url" :"/sfci.png"
        },

        {
            "id": 7,
        "url" :"/allabout.png"
        },


        {
            "id": 8,
        "url" :"/kr.png"
        },
        {
            "id": 9,
        "url" :"https://greatertechhub.com/assets/img/clients/vrdental.png"
        },
        {
            "id": 10,
        "url" :"https://greatertechhub.com/assets/img/clients/vrdental.png"
        },
        {
            "id": 11,
        "url" :"https://greatertechhub.com/assets/img/clients/vrdental.png"
        },
    ])
  return (
    <div className="overflow-hidden  mt-10">
        

        <div className="flex  flex-shrink-0 gap-40 w-full   filter grayscale-[95%]  px-40 pt-20 ">
        {elements.map((e,i)=>(
            <img className="h-32" key={i} src={e.url} alt="" />
            ))}
    </div>
        
    </div>
  )
}

export default marquee
