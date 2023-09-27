import React from 'react'

import { BiArrowBack } from "react-icons/bi" 
import { AiFillCloseCircle } from "react-icons/ai" 

const Header = (props) => {
  return (
    <div className="bg-blue-500 flex items-center justify-between p-3 text-white">
      <button onClick={props.prevPage} className={`${props.page === 0 ? 'invisible' : ""}`}>
       <BiArrowBack className="h-5 w-5"/> 
      </button>
       <h1 className="text-lg uppercase">Customize</h1>
       <button>
        < AiFillCloseCircle className="h-5 w-5" />
       </button>
    </div>
  )
}

export default Header