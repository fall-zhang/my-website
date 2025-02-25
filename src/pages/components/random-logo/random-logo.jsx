import React, { useState } from 'react'
import MyLogo1 from "./MyLogo1"
import MyLogo2 from "./MyLogo2"
import MyLogo3 from "./MyLogo3"
import MyLogo4 from "./MyLogo4"
import MyLogo5 from "./MyLogo5"
export const RandomLogo = ()=>{
  const [current,setCurrent] = useState(Math.floor(Math.random() * 5))
  let RenderLogo  = <></>
  if(current === 0){
    RenderLogo = <MyLogo1 />
  }
  if(current === 1){
    RenderLogo = <MyLogo2 />
  }
  if(current === 2){
    RenderLogo = <MyLogo3 />
  }
  if(current === 3){
    RenderLogo = <MyLogo4 />
  }
  if(current === 4){
    RenderLogo = <MyLogo5 />
  }
  return <div className='g-cursor-pointer' onClick={()=>setCurrent(Math.floor(Math.random() *5))}>
    {RenderLogo}
  </div>
}