"use client"
import React from 'react'
import Search from '@/components/Search'
import AddUpload from '@/components/AddUpload'

function Home() {
  const [index, setIndex] = React.useState(1);
  return (
    <div className='min-h-screen w-full'>
      <Search/>
    </div>
  )
}

export default Home