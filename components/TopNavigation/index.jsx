import React from 'react'

function TopNavigation() {
  const [index, setIndex] = React.useState(1);
  return (
    <div className='w-full flex flex-row justify-around items-center py-2'>
      <p className={`w-1/2 text-center text-xl font-semibold cursor-pointer ${index === 1 ? ' border-b-[2px] border-blue-500 text-blue-500' : ''}`}>Search</p>
      <p className={`w-1/2 text-center text-xl font-semibold cursor-pointer ${index === 2 ? ' border-b-[2px] border-blue-500 text-blue-500' : ''}`}>Add/Upload</p>
    </div>
  )
}

export default TopNavigation