import { Skeleton } from '@mui/material'
import React from 'react'

function DashboardSkeleton() {
  return (
    <div className="w-full h-screen mx-auto  overflow-hidden  p-8  rounded shadow-md mt-8">
    
        <div className='mt-5'>
        <Skeleton variant="rectangular" height={118} />
        <div className='mt-5'>
        <Skeleton  width={250}/>
        <Skeleton width={250} />
        <Skeleton width={250} />
        </div>
        </div>
      <div className='mt-10'>
        <Skeleton variant="rectangular"  height={118} />
        <div className='mt-5'>
          <Skeleton width={250} />
          <Skeleton width={250} />
          <Skeleton width={250} />
        </div>
      </div>  
        
      <div className='mt-10'>
        <Skeleton variant="rectangular"  height={118} />
        <div className='mt-5'>
          <Skeleton width={250} />
        </div>
      </div>
     
   
    </div>
  )
}

export default DashboardSkeleton