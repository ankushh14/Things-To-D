import React from 'react'
import Addtodo from '../components/Addtodo';

const Todo = () => {
  return (
    <>
      <div className="heading w-full pt-8 mb-4 flex justify-center items-center">
        <h1 className="text-3xl">Here is your ToDo List</h1>
      </div>
      <Addtodo/>
    </>
  )
}

export default Todo;
