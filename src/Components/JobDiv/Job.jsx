import React from 'react'
import { BiTimeFive } from 'react-icons/bi'


const Data = [
  {
    'id': 1,
    'image': 'https://placehold.co/55x55?font=roboto&text=huawei',
    'time': 'Now',
    'location': 'Canada',
    'desc': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta saepe, possimus quos odio provident similique tempora quidem culpa aspernatur accusantium perferendis enim laudantium laborum autem ducimus eligendi odit consequuntur cupiditate.',
    'company': 'Huawei Technoogies & Co',
    'jobtitle': 'Web Developer'

  }
]

const Job = () => {

  return (
    <div className="flex gap-2 justify-center flex-wrap py-10 px-5">
      {

        Data.map((data, index) => (

          <div className='justify-between items-center bg-blue-50 w-[355px] px-2 py-5 rounded-md shadow-md hover:bg-slate-300'>
            <div className='grid grid-cols-3'>
              <div className='col-span-1'>
                <div className='flex flex-col'>
                <span className='px-1'>{data.jobtitle}</span>
                <span className='px-1 text-xs text-greyish'>{data.location}   
                </span>
                </div>
              </div>
              <div className='col-span-2 flex items-center justify-end mr-2'>
              <BiTimeFive className='icon' />{data.time}
          </div>
            </div>

            <p className='mt-5 border-t-2 px-2'>
              <br></br>
              {data.desc}
            </p>
            <div className='grid grid-cols-5 items-center mt-1'>
            <div className='col-span-1'>
              <img src='https://placehold.co/55x55?font=roboto&text=huawei'></img></div>
             <div className='col-span-4'> <span className='text-sm py-1 px-1'>{data.company}</span> </div> 
            </div>
            <div className='grid grid-cols-10 items-center'>
              <div className='col-span-1 flex justify-center'>
              <button className='border rounded-lg p-2 bg-slate-100'>Apply Now</button>
              </div>
              </div>

          </div>

        ))

      }




    </div>
  )
}

export default Job