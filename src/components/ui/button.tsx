import React from 'react'
import Link from "next/link";
function Button(props:any) {
  return (
    <>
      <button className="bg-blue-500 duration-300 text-white font-bold py-2 px-4 rounded hover:bg-transparent hover:border-blue-600 ">
  <Link href='contact'>{props.text}</Link>
</button>
        </>
    
  )
}

export default Button
