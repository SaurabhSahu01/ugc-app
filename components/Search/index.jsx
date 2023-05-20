import React from 'react'

function Search() {
  const [searchData, setSearchData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/fetchcollectionname').then(res => res.json()).then(finaldata => {
      setSearchData(finaldata.data);
    })
  }, [])
  
  return (
    <div className='flex flex-col justify-around items-center'>
      <label htmlFor='subject'>Subject</label>
      <input id='subject' type='file'></input>
    </div>
  )
}

export default Search