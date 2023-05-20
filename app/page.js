"use client"
import React from 'react'
import TopNavigation from '@/components/TopNavigation'
import Search from '@/components/Search'
import AddUpload from '@/components/AddUpload'

function Home() {
  return (
    <div className='min-h-screen w-full'>
      <TopNavigation/>
     
      <AddUpload/>
    </div>
  )
}

export default Home