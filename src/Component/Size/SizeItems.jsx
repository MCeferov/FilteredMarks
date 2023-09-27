import { useState } from "react"

import { AiFillCheckCircle } from "react-icons/ai";


const SizeItems = (props) => {
    const [select,setSelect] = useState(false)
    const betweenSizes = () => {
        setSelect(!select) 
    }

  return (
    <div
    onClick={betweenSizes}
    className={`${select ? "z-10 transform scale-[1.02] shadow-md shadow-blue-300" : ""}
     cursor-pointer ${props.radius } relative flex justify-center items-center text-lg p-5 bg-white`}
    >{props.size} 
    {select && (
         <AiFillCheckCircle className="h-4 w-4 absolute -top-1 -right-1 bg-black rounded-full fill-green-500" />
    )}</div>
  )
}

export default SizeItems