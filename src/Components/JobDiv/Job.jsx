import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

const Job = () => {
  return (
    <div className="flex gap-2 justify-center flex-wrap py-10 px-5">
      <div className='flex flex-wrap justify-between items-center bg-blue-50 w-[355px] px-2 py-5 rounded-md shadow-md hover:bg-slate-300'>
        <span className='px-1'>Web Developer</span>
        <span className='flex items-center gap-1'>
          <BiTimeFive className='icon' /> Now </span>
        <span className='px-1 text-sm text-greyish'>Canada</span>
        <p className='mt-5 border-t-2 px-2'>
          <br></br>
        Lorem ipsum dolor sit,
         amet consectetur adipisicing elit. Ratione libero vero totam nostrum
          molestias quaerat aliquam deserunt, reprehenderit expedita maxime aliquid nemo
           eius cupiditate quibusdam quia maiores ducimus doloremque voluptate.</p>
           <div className='flex items-center mt-1'>
              <img src='https://placehold.co/55x55?font=roboto&text=huawei'></img>
              <span className='text-sm py-1 px-1'>Huawei Technologies Co</span>
           </div>
           <div className='flex'>
           <button className='border rounded-lg p-2 bg-slate-100'>Apply Now</button></div>

      </div>

      


    </div>
  )
}

export default Job