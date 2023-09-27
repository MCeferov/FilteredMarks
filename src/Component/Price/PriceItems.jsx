import { useState } from "react"

import { AiFillCheckCircle } from "react-icons/ai";

import React from 'react'

const PriceItems = (props) => {
   const [select,setSelect] = useState(false)

   const betweenMeasure = () => {
    setSelect(!select)
   }

  return (
    <div
      onClick={betweenMeasure}
      className="relative shadow-md mb-5 border cursor-pointer text-black border-white rounded-2xl p-3 flex justify-center items-center"
      style={{ opacity: `${select ? "1" : "0.2"}`}}
     >
{props.children}
{select && (
     <AiFillCheckCircle className="h-4 w-4 shadow-md shadow-blue absolute -top-1.5 -right-1.5 fill-green-500" />
)}
     </div>
  )
}

export default PriceItems