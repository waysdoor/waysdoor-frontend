"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function PrevButton() {  
  



  const router = useRouter();
  const prevPage = () => {
    router.back();
  };

  return (
   
      <ArrowBackIcon className='cursor-pointer' color='primary' onClick={prevPage} /> 
  )
}



export default PrevButton