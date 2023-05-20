import React from 'react'

function Search() {
  return (
    <div className='flex flex-col justify-around items-center'>
        <label htmlFor='subject'>Subject</label>
        <input id='subject' type='file'></input>
    </div>
  )
}

export default Search