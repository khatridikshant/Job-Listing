import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-gray-200 rounded p-[3rem] mt-2'>
      <form action=''>
        <div className='bg-slate-50 flex justify-between items-center p-5 shadow-lg'>
          <div className='flex flex-grow items-center gap-2'>
          <AiOutlineSearch className='text-lg icon'/>
          <input className='focus:outline-none bg-transparent w-full p-1'></input>
          </div>

        </div>

      </form>
    </div>
  )
}

export default Search