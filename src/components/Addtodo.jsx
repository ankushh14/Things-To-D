import React, { useState } from 'react'
import Todotable from './Todotable';

const Addtodo = () => {
    const [todo,setTodo] = useState("");
    const [responsemessage,setResponsemessage] = useState("");
    const [click,setClick] = useState(false)
    const handleChange = (e)=>{
        setTodo(e.target.value);
    }
    const handleClick = async()=>{
        setClick(!click);
        const userID = window.localStorage.getItem("userID");
        if(todo ===""){
            setResponsemessage("Please Write a ToDo!!")
        }else{
        const addresponse = await fetch(`http://localhost:8000/todos/addtodo`,{method:"POST",mode:"cors",headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
        description:todo,
        owner:userID
        })})
        const addmessage = await addresponse.json();
        setResponsemessage(addmessage.message);
    }
    }
  return (
    <>
    <div className="input-div w-full flex justify-center items-center space-y-4 lg:space-x-5 p-4 flex-col lg:flex-row">
        <input type="text" name="description" id="description" className='w-[80%] border-b-2 text-black lg:w-[60%] focus:outline-none p-3' autoComplete='false' placeholder='Enter a new todo..' onChange={handleChange}/>
        <button className="addtodo p-2 px-6 text-slate-100 bg-green-600 shadow-md rounded-md w-[50%] lg:w-auto hover:bg-green-500 transition-colors duration-500" onClick={handleClick}>Add ToDo</button>
    </div>
    <div className="added-message w-full p-2 text-center h-12">
        <h1 className="text-xl">{responsemessage}</h1>
    </div>
    <Todotable load={click}/>
    </>
  )
}

export default Addtodo