import Contact from '@/pages/Contact'
import React from 'react'

const contactPage = () => {
  return (
    <div className='py-32 overflow-x-hidden flex flex-col  justify-start items-center w-full '>
      <Contact/>
      <div className='bg-transparent  text-white  z-40   w-2/3'>
        <form action="" method='' className='flex gap-4 flex-col'>
        <div className='bg red-400 w-full  gap-5'>
          <label className='w-[20%]'>Name</label>
          <input className='w-[80%]' type="text" name="name" />
        </div>

        <div className=' w-full'>
          <label className='w-[20%]'>Email</label>
          <input className='w-[80%]' type="text" name="email" />
        </div>

        <div className='w-full'>
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>

        <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  )
}

export default contactPage
