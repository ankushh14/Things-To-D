import React, { useEffect, useState } from 'react'
import Todorow from './Todorow';

const Todotable = ({load}) => {
    const [allTodos,setAllTodos] = useState([]);
    const userId = window.localStorage.getItem("userID");
    useEffect(()=>{
        fetchTodos();
    },[load])
    const fetchTodos = async()=>{
        const response = await fetch(`http://localhost:8000/todos/gettodos?userID=${userId}`,{method:"GET",mode:"cors"})
        const data = await response.json();
        setAllTodos(data)
    }
  return (
    <div className='mt-6 w-full flex flex-col justify-center items-center space-y-3 p-2'>
      {
        allTodos.map((item)=>{
            return <Todorow description={item.description}/>
        })
      }
    </div>
  )
}

export default Todotable