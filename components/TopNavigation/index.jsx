import React from 'react'

function TopNavigation({index ,setIndex}) {
  return (
    <div className='w-full flex flex-row justify-around items-center py-2'>
      <p className={`w-1/2 text-center text-xl font-semibold cursor-pointer ${index === 1 ? ' border-b-[2px] border-blue-500 text-blue-500' : ''}`} onClick={() => setIndex(1)}>Search</p>
      <p className={`w-1/2 text-center text-xl font-semibold cursor-pointer ${index === 2 ? ' border-b-[2px] border-blue-500 text-blue-500' : ''}`} onClick={() => setIndex(2)}>Add/Upload</p>
    </div>
  )
}

export default TopNavigation