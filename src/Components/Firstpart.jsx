import React from 'react'

function Firstpart({handleaddtask , inputvalue , handlesetinputvalue}) {
  return (

    <>
    <div className='flex flex-col items-center mt-8 gap-5'>
    <h1 className='text-6xl between:tracking-wider between:text-5xl text-white font-bold font-sans'>Todo List</h1>
    <input onChange={handlesetinputvalue} placeholder='Enter the task.....' className='placeholder-shown:pl-1 pl-1 between:h-10 between:w-64 w-96 h-10 between:rounded-md rounded-md focus:outline-none'  type="text"  value={inputvalue} />
    <button onClick={handleaddtask} className='border px-2 text-gray-500 hover:text-black  py-0.5 rounded-sm bg-white' type="submit">Add task</button>
    </div>
    </>
  )
}

export default Firstpart