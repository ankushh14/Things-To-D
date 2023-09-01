import React, { useEffect, useState } from 'react'
import { FaPen,FaTrash } from "react-icons/fa";

const Todorow = ({description ,ID ,value}) => {
  
  const [isDisabled,setisDisabled] = useState(true);
  const [update,setUpdate] = useState(description);
  const [click ,setClick] = value;

  const handleUpdateChange = (e)=>{
    setUpdate(e.target.value);
  }

  const handleUpdateClick = async() =>{
      setisDisabled(true)
      await fetch(`http://localhost:8000/todos/updatetodo`,{method:"POST",mode:"cors",headers:{
        "Content-Type": "application/json",
      },body:JSON.stringify({
        todoID:ID,
        update
      })})
      setClick(!click);
  }

  const handleDelete = async()=>{
    const response = await fetch(`http://localhost:8000/todos/deletetodo`,{method:"DELETE",mode:"cors",headers:{
      "Content-Type": "application/json",
    },body:JSON.stringify({
      todoID:ID
    })})
    const data = await response.json();
    setClick(!click)
  }
  return (
    <>
    <div className='w-[90%] sm:w-[70%] border text-black shadow-sm shadow-black rounded-md flex flex-row p-3 items-center justify-between' id={ID}>
        <div className="desc-row flex flex-row items-center">
        <div className="rounded-full border-2 border-black mr-2 w-2 h-2"></div>
        <input type="text" className={`todo bg-white px-2 border-black focus:outline-none ${!isDisabled?`border-b`:`border-none`}`} value={update} disabled = {isDisabled} onChange={handleUpdateChange} />
        </div>
        <div className="btns-row flex items-center space-x-3">
            <FaPen className='cursor-pointer' onClick={()=>setisDisabled(false)}/>
            <h1>|</h1>
            <FaTrash className='cursor-pointer' onClick={handleDelete}/>
        </div>
    </div>
    <div className="update-btn w-[70%]">
      {
        !isDisabled?(
          <button className='update p-2 px-4 bg-green-200 hover:bg-green-300 shadow-sm shadow-black rounded-md transition-colors duration-500' onClick={handleUpdateClick}>Update</button>
        ):(
          <></>
        )
      }
      
    </div>
    </>
  )
}

export default Todorow
