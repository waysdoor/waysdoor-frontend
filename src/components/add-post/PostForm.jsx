"use client"
import {submitPostForm } from '@/lib/actions';

import { useRouter } from 'next/navigation';
import React, { useEffect,useRef, useState } from 'react'
import { useFormState } from "react-dom";


function PostForm() {
  const router=useRouter()
  const formRef=useRef()
  const[state,formAction] =useFormState(submitPostForm,{success:false,status:null})
  const [errors,setErrrors]=useState(null)  
    useEffect(()=>{
      if(state.success){
        setErrrors(null)
        formRef.current.reset()
        router.push('/')
      }else{
        setErrrors(state.status?.errors)
      }
      
    },[state,router])

  const renderErrors = (fieldName) => {
   const fieldErrors = errors?.filter((error) => Object.keys(error)[0] === fieldName);
    return fieldErrors?.map((error, index) => (
      <span key={index} className="text-red-600 px-3 bg-red-200 font-medium">
        {Object.values(error)[0]}
      </span>
    ));
  };
  
  return (
  <div className="w-full mx-auto bg-white p-8 border rounded shadow-md mt-8">
      <form ref={formRef}  action={formAction} >
        <input
        name="title"
        type='text'
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Title" 
        ></input>
       {renderErrors('title')}
        <textarea
        type='text'
        name="description"
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Whats on your mind"
          // value={postContent}
          // onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
         {renderErrors('description')}
        
        <div className="mb-4 w-fit">
         
          <input
            type="file"
            name='image'
            className="w-full  rounded py-2"
            // onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Post
          </button>
        </div>
      </form>
    </div>
    )
}

export default PostForm