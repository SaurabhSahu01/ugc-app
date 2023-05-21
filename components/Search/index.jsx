import React from 'react';
import Table from './Table';
import 'react-dropdown/style.css';

function Search() {
  const [searchData, setSearchData] = React.useState(null);
  const [searchCat, setSearchCat] = React.useState(null);
  const [subject, setSubject] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [fetchedData, setFetchedData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/fetchcollectionname').then(res => res.json()).then(finaldata => {
      console.log("collection fetched");
      setSearchData(finaldata.data);
    })
  }, [])

  React.useEffect(() => {
    fetch('/api/fetchcategories').then(res => res.json()).then(finaldata => {
      console.log("categories fetched");
      setSearchCat(finaldata.data);
    })
  }, [])

  function handleSearch() {
    console.log(subject);
    console.log(category);
    console.log('searching')
    fetch('/api/search', {
      method: "POST",
      Headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: subject,
        category: category
      })
    }).then(res => res.json())
    .then(data => setFetchedData(data.data))
    .catch(err => console.log(err));
  }
  return (
    <div className='w-full flex flex-col justify-around items-center mt-3 gap-4'>
      <div className='w-full flex flex-row justify-center items-center gap-3'>
        <span className='text-md font-semibold'>Subject</span>
        <select className='py-2 w-[260px] text-[12px] font-medium outline-none border-[0.5px] border-blue-400 rounded-md' onChange={e => setSubject(e.target.value)}>
          <option value="">---SELECT SUBJECT---</option>
          {
            searchData?.map((item) => {
              return <option value={item}>{item}</option>
            })
          }
        </select>
      </div>
      <div className='w-full flex flex-row justify-center items-center gap-3'>
        <span className='text-md font-semibold'>Category</span>
        <select className='py-2 w-[260px] text-[12px] font-medium outline-none border-[0.5px] border-blue-400 rounded-md' onChange={e => setCategory(e.target.value)}>
          <option value="">---SELECT CATEGORY---</option>
          {
            searchCat?.map((item) => {
              return <option value={item}>{item}</option>
            })
          }
        </select>
      </div>
      <span className='p-2 text-white bg-blue-500 rounded-md' onClick={() => (subject && category) && handleSearch()}>Search</span>
      {fetchedData && <Table data={fetchedData}/>}
    </div>
  )
}

export default Search