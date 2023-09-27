import React from 'react'

import { MdOutlineNavigateNext } from "react-icons/md"

const Button = (props) => {
  return (
    <button onClick={props.click}
     className="absolute bg-blue-500 text-white h-10 w-20 flex items-center justify-center rounded-full transition-all active:scale-95 shadow-lg active:shadow-md left-1/2 -translate-x-1/2 bottom-10">
    <span> {props.content} </span>
    {props.page !==2 && ( <MdOutlineNavigateNext className="fill-white h-5 w-5"/>)}
   
  </button>
  )
}

export default Button