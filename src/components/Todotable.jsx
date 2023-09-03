import React, { useEffect, useState } from 'react'
import Todorow from './Todorow';

const Todotable = ({value}) => {
    const [allTodos,setAllTodos] = useState([]);
    const [click ,setClick] = value;
    const userId = window.localStorage.getItem("userID");
    useEffect(()=>{
        fetchTodos();
    },[click])
    const fetchTodos = async()=>{
        const response = await fetch(`${process.env.BACKEND_API}/todos/gettodos?userID=${userId}`,{method:"GET",mode:"cors"})
        const data = await response.json();
        setAllTodos(data)
    }
  return (
    <div className='mt-6 w-full flex flex-col justify-center items-center space-y-3 p-2'>
      {
        allTodos.map((item)=>{
            return <Todorow description={item.description} ID={item._id} value = {[click,setClick]}/>
        })
      }
    </div>
  )
}

export default Todotable
