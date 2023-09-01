import React from 'react'
import { FaPen,FaTrash } from "react-icons/fa";

const Todorow = ({description}) => {
  return (
    <div className='w-[70%] border text-black shadow-sm shadow-black rounded-md flex flex-row p-3 items-center justify-between'>
        <div className="desc-row flex flex-row items-center">
        <div className="rounded-full border-2 border-black mr-2 w-2 h-2"></div>
        <h1 className="todo ">{description}</h1>
        </div>
        <div className="btns-row flex items-center space-x-3">
            <FaPen className='cursor-pointer'/>
            <h1>|</h1>
            <FaTrash className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default Todorow