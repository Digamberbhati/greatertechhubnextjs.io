import React from 'react'
import Link from "next/link";
function Button(props:any) {
  return (
    <>
      <button className="bg-gray-800 duration-300 text-white font-bold py-2 px-4 rounded hover:bg-transparent hover:bg-transparent ">
  <Link href='/contact'>{props.text}</Link>
</button>
        </>
    
  )
}

export default Button
