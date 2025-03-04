import { useEffect, useState } from "react"

export const useLocalValue = (propName:string)=>{
  const [value,setValue] = useState(localStorage.getItem(propName))
  useEffect(()=>{
    localStorage.setItem(propName,value)
  },[value])

  return [value,setValue]
}