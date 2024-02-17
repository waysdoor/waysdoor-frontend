import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-red-700 text-white flex justify-end gap-5 p-3'>
      <Link href='/about'>About</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/login'>Login</Link>
    </div>
  )
}

export default Navbar