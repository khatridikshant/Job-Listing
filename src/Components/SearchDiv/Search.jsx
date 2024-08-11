import React from 'react'
import { AiOutlineClockCircle, AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-gray-200 rounded p-[3rem] mt-2'>
      <form action=''>
        <div className='bg-slate-50 flex justify-between items-center p-5 shadow-lg'>
          <div className='flex flex-grow items-center gap-2'>
            <AiOutlineSearch className='text-2xl icon' />
            <input className='focus:outline-none bg-transparent  p-1' placeholder='Search By Jobs'></input>
            <AiOutlineCloseCircle className='text-2xl icon' />
          </div>
          <div className='flex flex-grow items-center gap-2'>
            <AiOutlineHome className='text-2xl icon' />
            <input className='focus:outline-none bg-transparent  p-1' placeholder='Search By Home'></input>
            <AiOutlineCloseCircle className='text-2xl icon' />
          </div>
          <div className='flex flex-grow items-center gap-2'>
            <AiOutlineEnvironment className='text-2xl icon' />
            <input className='focus:outline-none bg-transparent  p-1' placeholder='Search By Location'></input>
            <AiOutlineCloseCircle className='text-2xl icon' />
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>



      </form>
      <div className='flex items-center mt-1 justify-center gap-2'>
        <div className='flex m-2'>
        <div className='flex items-center mr-1'>
          Sort By:
        </div>
        <select id="relevance" className=''>
          <option>Relevance</option>
          <option>Inclusive</option>
          <option>Starts With</option>
          <option>Contains</option>
          </select>
</div>
<div className='flex m-2'>
          <div className='flex items-center mr-1'>
          Type:
        </div>
        <select id="type" className=''>
          <option>Full-Time</option>
          <option>Remote</option>
          <option>Part-Time</option>
          <option>Contract</option>
          </select>
          </div>

 <div className='flex m-2'>
          <div className='flex items-center mr-1'>
          Type:
        </div>
        <select id="level" className=''>
          <option>Senior</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advocate</option>
          </select>
          </div>     
          <span className='icon'> Clear All </span>
      </div>
 
    </div>
  )
}

export default Search