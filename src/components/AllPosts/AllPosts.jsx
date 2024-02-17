"use client"
import axios from 'axios'
import Image from 'next/image'
import React, {  } from 'react'


 
 function AllPosts({posts}) {


  return (
    
    <>
     <h1 className='text-xl mt-10 font-bold text-black'>AllPosts:</h1>

    {posts.map((post,index)=>(
        <div key={index} className='p-4 bg-slate-900 text-white  shadow-xl border border-t-2'>
        
          <div className="flex items-center py-3">
          <span className="text-2xl cursor-pointer text-yellow-400 font-bold">{post.author}</span><span className="mx-2 font-bold">posted on :</span><span className="mx-2 font-bold text-green-500">12 dec 2024</span>
          </div>
          <div className='flex items-center w-2/3 gap-4'>
            <Image src='/photo1.jpg' width={80} height={80} alt='post-image'></Image>
            <p className='text-xl font-semibold '>desc</p>
          </div>
        
        </div>

      ))}  
      </> 
  )
}

export default AllPosts
