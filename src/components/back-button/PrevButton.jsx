"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function PrevButton() {  
    const router=useRouter()
    const prevPage=()=>{
        router.back()
    }
  return (
    <button onClick={prevPage}></button>
  )
}

export default PrevButton