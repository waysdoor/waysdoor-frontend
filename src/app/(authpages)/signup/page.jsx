import svgs from '@/assets/svgs'
import Link from 'next/link'
import React from 'react'



export const metadata = {
  title: "Signup Page",
  description: "This is Signup page",
};

function SignupPage() {
  

  const signupGoogleHandler=async(e)=>{
    "use server"

  }
  return (

<div className="bg-grey-lighter min-h-screen flex flex-col">
<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
<div className="bg-white px-4 py-8 rounded shadow-md text-black w-full">
                
<h1 className="mb-8 text-3xl text-center">Sign up</h1>
<form className='w-full flex justify-center'>
<button onClick={signupGoogleHandler} className="flex w-full justify-center items-center px-4   bg-gray-900 border border-gray-300 rounded-lg shadopx-6 py-2 text-sm font-medium  text-white hover:bg-gray-700 focus:outline-focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
{svgs.google}
<span className='px-3'>Continue with Google</span>
</button>
</form>
<input 
    type="text"
    className="block border mt-8 border-gray-100 w-full p-3 rounded mb-4"
    name="fullname"
    placeholder="Full Name" />

<input 
    type="text"
    className="block border border-gray-100 w-full p-3 rounded mb-4"
    name="email"
    placeholder="Email" />



  <input  type="date" className="block border border-gray-100 w-full p-3 rounded mb-4" placeholder="Select date"/>


<input 
    type="password"
    className="block border border-gray-100 w-full p-3 rounded mb-4"
    name="password"
    placeholder="Password" />
<input 
    type="password"
    className="block border border-gray-100 w-full p-3 rounded mb-4"
    name="confirm_password"
    placeholder="Confirm Password" />

<button type="submit" className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1">Create Account</button>
</div>

<div className="text-grey-dark mt-6">
Already have an account? 
<Link href='/login' className="no-underline ml-2 border-b border-blue text-blue" >Log in</Link>
</div>


</div>
</div>
  )
}

export default SignupPage