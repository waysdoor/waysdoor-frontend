import PrevButton from '@/components/back-button/PrevButton';
import Image from 'next/image'
import React from 'react'
import axios from 'axios'
import API_BASE_URL from "@/utils/baseURL";
import SinglePost from '@/components/singlePost';

export const metadata = {
  title: "Single Post Page",
  description: "This is Single Post page",
};

const getSinglePost = async (postId) => {
  const response = await axios.get(`${API_BASE_URL}/api/post/${postId}`);

  return response.data;
}
export default async function DetailedPost(params) {
  const postId=params.params.postId
  const post = await getSinglePost(postId)

  return (
   <SinglePost data={post}/>
   

  )
}
