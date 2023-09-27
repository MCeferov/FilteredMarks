import React from 'react'

const Progress = (props) => {
  return (
         <div 
           id="progress"
          className="absolute left-0 bottom-0 h-1 bg-blue-500 transition-all duration-200"
          style={{width: `${(props.page + 1) *33.3333333}%`}}>
        </div>
  )
}

export default Progress