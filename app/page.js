"use client"
import React from 'react'
import TopNavigation from '@/components/TopNavigation'
import Search from '@/components/Search'
import AddUpload from '@/components/AddUpload'

function Home() {
  const [index, setIndex] = React.useState(1);
  return (
    <div className='min-h-screen w-full'>
      <TopNavigation index={index} setIndex={setIndex}/>
      {(index === 1) && <Search/>}
      {(index === 2) && <AddUpload/>}
    </div>
  )
}

export default Home