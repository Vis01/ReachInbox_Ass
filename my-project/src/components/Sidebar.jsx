import React from 'react'
import { FaInbox } from "react-icons/fa";
import { IoMdMail, IoIosStats } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlinePersonSearch } from "react-icons/md";

const Sidebar = ({onSelect}) => {
  return (
    <div className='w-14 h-full flex-col justify-center items-center dark:bg-zinc-800 dark:text-white shadow-md py-4'>
        <div className='w-7 h-6 m-auto rounded-sm flex justify-center text-xl bg-zinc-800 text-white  dark:bg-white dark:text-gray-900 font-bold' >
            M
        </div>
        <div className='flex-col justify-center text-2xl p-2 m-auto my-10'>
        <CiHome  className='m-1 my-6 hover:scale-125 duration-200 ' />
        <IoMdMail className='m-1 my-6 hover:scale-125 duration-200' />
        <MdOutlinePersonSearch className='m-1 my-6 cursor-pointer hover:scale-125 duration-200' />
        <BsFillSendFill className='m-1 my-6 hover:scale-125 duration-200'/>
        <FaInbox onClick={() => onSelect('inbox')} className='m-1 my-6 hover:scale-125 duration-200'/>
        <IoIosStats className='m-1 my-6 hover:scale-125 duration-200' />

        </div>
        
    </div>
  )
}

export default Sidebar