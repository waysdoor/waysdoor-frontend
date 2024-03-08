"use client"
import Image from 'next/image'
import Link from 'next/link' 
import React from 'react'
import {useState,useEffect} from 'react'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'; 
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';import { Zoom } from '@mui/material';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 function Post({ post }) {
   const settings = {
     dots: true,
     fade: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     waitForAnimate: false
   };
   
    const [liked,setLiked]=useState(false)
   const toggleLike=()=>{
    setLiked(!liked)
   } 

    //  const getImageUrl = () => {
    //      if (post.image && post.image.data) {
    //          const binaryArray = post.image.data.data;
    //          const uint8Array = new Uint8Array(binaryArray);
    //          const binaryString = uint8Array.reduce((acc, value) => acc + String.fromCharCode(value), '');
    //          const base64String = btoa(binaryString);
    //          return `data:image/jpeg;base64,${base64String}`;
    //      }
    //      return null;
    //  };

 console.log("posts",post)
     
  return (
      <div  className='p-4 bg-slate-900 text-white  shadow-xl border border-t-2'>
      
          <div className="flex items-center py-3">
       
              <span className="text-2xl cursor-pointer text-yellow-400 font-bold">{post.author}</span><span className="mx-2 font-bold">posted on :</span><span className="mx-2 font-bold text-green-500">12 dec 2024</span>
          </div>
      <p className='text-xl font-semibold '>desc</p>
     
        <div className='w-[70%] bg-black py-10 flex justify-center'>
        <Link  href={`/post/${post._id}`}>  
         
         <Slider {...settings}>
           {post.media.map((url,index)=>(
            <div>
            <Image key={index} src={url} width={380} height={80} alt='post-image' />
             </div>
          ))}
         </Slider>
        </Link>
        </div>      
   
    
    <div className='flex gap-5 mt-5'>
    {liked?<Zoom in={liked}><FavoriteOutlinedIcon onClick={toggleLike}  sx={{cursor:'pointer',color:'red'}}/></Zoom>:
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
}}/>
      
    </div>

     
      </div>
  )
}

export default Post