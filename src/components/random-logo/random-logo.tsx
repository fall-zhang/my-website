import React, { useState } from 'react'
import MyLogo1 from './MyLogo1'
import MyLogo2 from './MyLogo2'
import MyLogo3 from './MyLogo3'
import MyLogo4 from './MyLogo4'
import MyLogo5 from './MyLogo5'
export default function RandomLogo(){
  const [current,setCurrent] = useState(Math.floor(Math.random() * 4))
  let RenderLogo = <></>
  if(current === 0){
    RenderLogo = <MyLogo1 />
  }else if(current === 1){
    RenderLogo = <MyLogo2 />
  }else if(current === 2){
    RenderLogo = <MyLogo3 />
  }else if(current === 3){
    RenderLogo = <MyLogo4 />
  }else if(current === 4){
    RenderLogo = <MyLogo5 />
  }
  return <div className='g-cursor-pointer g-user-select-none' onClick={()=>setCurrent((pre)=>{
    const newState = Math.floor(Math.random() *4)
    if(pre === newState){
      return 4
    }
    return newState
  })}>
    {RenderLogo}
  </div>
}