import React from 'react'
import Link from "next/link";
function Button() {
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-300 duration-500 text-white font-bold py-2 px-4 rounded ">
  <Link href='contact'> contact for services</Link>
</button>
        </>
    
  )
}

export default Button
