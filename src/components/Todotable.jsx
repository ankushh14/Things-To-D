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

    const handleDelete = async(ID)=>{
      const response = await fetch(`${process.env.BACKEND_API}/todos/deletetodo`,{method:"DELETE",mode:"cors",headers:{
        "Content-Type": "application/json",
      },body:JSON.stringify({
        todoID:ID
      })})
      const data = await response.json();
      console.log(data.message);
      setAllTodos((prev)=>[...prev].filter(elem => elem._id !== ID));
    }

  return (
    <div className='mt-6 w-full flex flex-col justify-center items-center space-y-3 p-2'>
      {
        allTodos.map((item)=>{
            return <Todorow description={item.description} ID={item._id} value = {[click,setClick]} handleDelete = {handleDelete}/>
        })
      }
    </div>
  )
}

export default Todotable
