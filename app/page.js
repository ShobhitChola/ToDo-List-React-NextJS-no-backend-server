"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  
  const submithandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (index) =>{
    let copyTask = [...mainTask]
    copyTask.splice(index,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length > 0){
    renderTask = mainTask.map((task, index)=>{
      return (
        <li key={index} className='flex items-centre justify-between mb-5'>
          <div className='w-2/3'>
            <h5 className='text-2xl font-semibold'>{task.title}</h5>
            <p className='text-lg font-medium'>{task.desc}</p>
          </div>
          <button 
          onClick={()=>{
            deleteHandler(index)
          }} 
          className='bg-red-500 text-white px-4 py-2 rounded h-10 font-bold'>Delete</button>
        </li>
      )
    })
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-3xl font-bold text-center'>Shobhit's ToDo List</h1>
    <form onSubmit={submithandler}>
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
      placeholder='Enter Title here'
      value={title}
      onChange={(elem)=>{
        settitle(elem.target.value)
      }}/>

      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
      placeholder='Enter Description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}/>

      <button className='bg-black text-white px-4 py-2.5 text-2xl font-bold rounded'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page