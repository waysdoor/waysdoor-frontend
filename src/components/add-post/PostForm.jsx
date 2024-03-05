"use client"
import {submitPostForm } from '@/lib/actions';
import Image from 'next/image';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'; 
import { useRouter } from 'next/navigation';
import React, { useEffect,useRef, useState } from 'react'
import { useFormState } from "react-dom";
import LinearProgress from '@mui/material/LinearProgress';

function PostForm() {
  const router=useRouter()
  const formRef=useRef()
  const [selectedFiles, setSelectedFiles] = useState([]); 
  const [progress, setProgress] = useState(0);
  const[state,formAction] =useFormState(submitPostForm,{success:false,status:null})
  const [errors,setErrrors]=useState(null)  
    useEffect(()=>{
      if(state.success){
        setErrrors(null)
        setProgress(100); 
        formRef.current.reset()
        setSelectedFiles([])
        // router.push('/')
      }else{
        setErrrors(state.status?.errors)
      }  
    },[state,router])
  
  const handleFileChange = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);
  };

  const removeSelectedFile = (index) => {
    setSelectedFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const renderErrors = (fieldName) => {
   const fieldErrors = errors?.filter((error) => Object.keys(error)[0] === fieldName);
    return fieldErrors?.map((error, index) => (
      <span key={index} className="text-red-600 px-3 rounded-md py-1 bg-red-200 font-medium">
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
          className="w-full p-2 border rounded  mt-4 mb-4"
          rows="4"
          placeholder="Title" 
        ></input>
       
       {renderErrors('title')}
        
        <textarea
        type='text'
        name="description"
        className="w-full p-2 border rounded mt-4 mb-4"
        rows="4"
        placeholder="Whats on your mind"  
        ></textarea>
        
        {renderErrors('description')}
        
        <div className="mb-4  mt-4 w-fit">        
          <input
            type="file"
            name='image'
            multiple
            onChange={handleFileChange}
           
            accept="image/*,video/*"
            className="w-full  rounded py-2"
          />
        </div>
        
        <div className="mt-2 flex flex-wrap gap-10">
          {selectedFiles.map((file, index) => (
            <div className="relative" key={index}>
              <Image
                src={URL.createObjectURL(file)}
                alt={`Selected ${index}`}
                className="mr-2 mb-2"
                width={130}
                height={50}
              />
              <div className="absolute top-0 right-0">
                <div onClick={() => removeSelectedFile(index)}>
                  <RemoveCircleIcon
                    sx={{ cursor: 'pointer' }}
                    color="error"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Post
          </button>
        </div>
      
      </form>
    {/* <LinearProgress variant='determinate' value={progress}/> */}
  </div>
    )
}

export default PostForm