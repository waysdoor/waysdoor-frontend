"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Zoom } from '@mui/material';
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
const [liked, setLiked] = useState(false)
    const toggleLike = () => {
        setLiked(!liked)
    }





    return (
        <div className='p-4 bg-slate-900 text-white  shadow-xl border border-t-2'>

            <div className="flex items-center py-3">
                <span className="text-2xl cursor-pointer text-yellow-400 font-bold">{post.author}</span><span className="mx-2 font-bold">posted on :</span><span className="mx-2 font-bold text-green-500">12 dec 2024</span>
            </div>

            <p className='text-xl font-semibold '>{post.title}</p>

            <div className='w-full flex gap-10 items-start'>
                <div className='w-[70%] bg-black py-10 flex justify-center'>
                      
                    <Slider {...settings}>
                        {post.media.map((url, index) => (
                            <div>
                                <Image key={index} src={url} width={380} height={80} alt='post-image' />
                            </div>
                        ))}
                    </Slider>
                    
                </div>

                <div className='flex w-[30%] flex-col  border-white border p-3'>
                    <Link href={`/post/${post.pid}`}>
                        <div className='p-10 w-full  blur-[2.3px] bg-slate-700 text-white text-xl '>
                            {post.description}
                        </div>
                    </Link>
                    <div className='flex gap-5 mt-5'>
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