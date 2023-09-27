//! Components 
import { useState } from "react"

import Header from  "./Component/Header/Header"
import Button from "./Component/Button/Button"
import BrandItems from './Component/Brands/BrandItems'
import Progress from "./Component/Progress/Progress"
import PriceItems from "./Component/Price/PriceItems"
import SizeItems from "./Component/Size/SizeItems"

// ! Images 

import Adidas from "./Images/adidas.png"
import bershka from "./Images/bershka.png"
import canda from "./Images/canda.png"
import champ from "./Images/champ.png"
import lacoste from "./Images/lacoste.png"
import pullandbear from "./Images/pullandbear.png"
import zara from "./Images/zara.png"

const App = () => {

  const [page, setPage] = useState(0)
  
  const nextPage = () => {
    if (page < 2 ) {
      setPage(page+1)
    }
  }

const prevPage = () => {
  setPage(page-1)
}

let btnContent = "Next"
let title = " Select your favourite brands"

if (page === 2) {
  btnContent = "Ready!"
}

if(page === 1) {
  title = "Select a price range"
}
if(page === 2) {
  title = "Select a size"
}

  return (
    <div className='bg-blue-700 h-screen flex items-center justify-center'>
<div className="w-[300px] h-[500px] bg-white font-sans-serif relative">
  <Header prevPage={prevPage} page={page} />
  <div className="p-5 text-gray-500">
    <h1 className="text-sm text-center mb-5" >
    {title}
    </h1>
    {/* Brands */}
    {page === 0 && (    <div id="container" className="flex justify-between flex-wrap">
     <BrandItems src={Adidas}/>
     <BrandItems src={zara}/>
     <BrandItems src={pullandbear}/>
     <BrandItems src={bershka}/>
     <BrandItems src={canda}/>
     <BrandItems src={champ}/>
     <BrandItems src={lacoste}/>
    </div>
    )
     }
  {/*Price */}
    {
      page === 1 && (
        <div id="containerPrice">
              <PriceItems>$800 - $1500</PriceItems>
              <PriceItems>$200 - $800</PriceItems>
              <PriceItems>$50 - $200</PriceItems>
              <PriceItems>0 - $50</PriceItems>
        </div>
      )
    }
    { page === 2 && (
      <div id="containerSize" className="h-screen flex justify-items-start items-center ">
        <div className="flex flex-wrap  justify-between items-center gap-4">
        <SizeItems size="XS" radius={"rounded-tl-lg"} />
                <SizeItems size="S" />
                <SizeItems size="M" radius={"rounded-tl-lg"} />
                <SizeItems size="L" radius={"rounded-tl-lg"} />
                <SizeItems size="XL" />
                <SizeItems size="XXL" radius={"rounded-tl-lg"} />
        </div>
      </div>
    )}
    {/* Next Btn */}
  <Button click={nextPage} page={page} content={btnContent}/>
      {/* Progress */}
         <Progress page={page} />
       </div>
      </div>
    </div>
  )
}

export default App