"use client"
import Image from 'next/image'
import Link from 'next/link' 
import React from 'react'
import {useState,useEffect} from 'react'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'; 
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Backdrop, Skeleton, Zoom } from '@mui/material';
 function Post({ post }) { 
  const [liked,setLiked]=useState(false)
   const toggleLike=()=>{
    setLiked(!liked)
   } 

     const getImageUrl = () => {
         if (post.image && post.image.data) {
             const binaryArray = post.image.data.data;
             const uint8Array = new Uint8Array(binaryArray);
             const binaryString = uint8Array.reduce((acc, value) => acc + String.fromCharCode(value), '');
             const base64String = btoa(binaryString);
             return `data:image/jpeg;base64,${base64String}`;
         }
         return null;
     };

 
     
  return (
      <div  className='p-4 bg-slate-900 text-white  shadow-xl border border-t-2'>
      
          <div className="flex items-center py-3">
          <span className="text-2xl cursor-pointer text-yellow-400 font-bold">{post.author}</span><span className="mx-2 font-bold">posted on :</span><span className="mx-2 font-bold text-green-500">12 dec 2024</span>
          </div>
      
        <p className='text-xl font-semibold '>{post.title}</p>
        
        <div className='w-full flex gap-10 items-start'>    
        <div className='w-[70%] bg-black py-10 flex justify-center'>      
        <Image src={getImageUrl()} width={380} height={80} alt='post-image' />       
        </div>
        
        <div className='flex w-[30%] flex-col  border-white border p-3'>
        <Link href={`/post/${post._id}`}>
        <div className='p-10 w-full  blur-[2.3px] bg-slate-700 text-white text-xl '>
        {post.description}
        </div>
        </Link>
        <div className='flex  gap-5 mt-5'>
          {liked ? <Zoom in={liked}><FavoriteOutlinedIcon onClick={toggleLike} sx={{ cursor: 'pointer', color: 'red' }} /></Zoom> :
            <FavoriteBorderIcon
              onClick={toggleLike}
              sx={{
                color: 'red',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              }}
            />}

          <ModeCommentOutlinedIcon sx={{
            cursor: 'pointer',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.2)',
            },
          }} />

        </div>
        </div>
        </div>
   

     
      </div>
  )
}

export default Post