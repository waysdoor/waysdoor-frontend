import Image from 'next/image'
import React from 'react'
import PrevButton from '../back-button/PrevButton';

 export default function SinglePost({data}) {
  const getImageUrl = (binaryData) => {
    if (binaryData) {
      const uint8Array = new Uint8Array(binaryData);
      const binaryString = uint8Array.reduce((acc, value) => acc + String.fromCharCode(value), '');
      const base64String = btoa(binaryString);
      return `data:image/jpeg;base64,${base64String}`;
    }
    return null;
  };
  return (
    <div className='p-4 bg-slate-900 text-white  shadow-xl border border-t-2'>
      <PrevButton />
      <div className="flex items-center py-3">
        <span className="text-2xl cursor-pointer text-yellow-400 font-bold">{data.author}</span><span className="mx-2 font-bold">posted on :</span><span className="mx-2 font-bold text-green-500">12 dec 2024</span>
      </div>
      <div className='flex items-center w-2/3 gap-4'>
        <Image src={getImageUrl(data.image.data.data)} width={80} height={80} alt='post-image'></Image>
        <p className='text-xl font-semibold '>{data.title}</p>
      </div>
      <div className='py-3 text-white text-normal tracking-wider'>
        {data.description}
      </div>

    </div>
  )
}

