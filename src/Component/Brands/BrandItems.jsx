import React from 'react'
import {useState} from "react"

import { AiFillCheckCircle } from "react-icons/ai"

const BrandItems = (props) => {

    const [select , setSelect] = useState(false)

    const selectItem = () => {
        setSelect(!select)
    }

  return (
    <div onClick={selectItem} className={`relative h-20 w-20 cursor-pointer flex items-center justify-center border border-black rounded-3xl mb-2 ${select ? "" : "opacity-20" }`}>
    <img className="w-3/4 " src={props.src} alt="" />
     { select &&
      (<AiFillCheckCircle className="h-4 w-4 absolute -top-1 -right-1 fill-green-500" />)  }
     </div>
  )
}

export default BrandItems