import React from 'react'

function DashboardSkeleton() {
  return (
    <div className="w-full h-screen mx-auto bg-[#e5e5e5] p-8 border rounded shadow-md mt-8">
      <div>
        <div
          name="title"
          type='text'
          className="w-full bg-[#d0d0d0] p-2 border rounded mb-4 h-9"
        ></div>
        <div
          type='text'
          name="description"
          className="w-1/2 bg-[#d0d0d0] p-2 h-12 border rounded mb-4"
          rows="4"
        ></div>
        <div className="mb-4 w-1/2">
        
          <div
            type="file"
            id="fileInput"
            className="w-1/2 bg-[#d0d0d0] border rounded py-2 px-3"
          />
        </div>
        <div className="flex items-center justify-between">
          <div

            className="bg-[#d0d0d0] w-1/3 h-9   px-4 py-2 rounded "
          >

          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSkeleton