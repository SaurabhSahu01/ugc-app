import React from 'react';
import Table from './Table';
import 'react-dropdown/style.css';
import FadeLoader from "react-spinners/FadeLoader";

function Search() {
  const [loading, setLoading] = React.useState(false);
  const [searchData, setSearchData] = React.useState(null);
  const [searchCat, setSearchCat] = React.useState(null);
  const [subject, setSubject] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [fetchedData, setFetchedData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/fetchcollectionname').then(res => res.json()).then(finaldata => {
      // console.log("collection fetched");
      setSearchData(finaldata.data);
    })
  }, [])

  React.useEffect(() => {
    fetch('/api/fetchcategories').then(res => res.json()).then(finaldata => {
      // console.log("categories fetched");
      setSearchCat(finaldata.data);
    })
  }, [])

  function handleSearch() {
    setLoading(true);
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
      .then(data => {
        setFetchedData(data.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }
  return (
    <div className='w-full flex flex-col justify-around items-center mt-3 gap-4'>
      {loading && <div className='w-full min-h-screen z-50 fixed top-0 bg-white/80 flex items-center justify-center'>
        <FadeLoader
          color={"#42b9f5"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>}
      <div className='w-full flex flex-row justify-center items-center gap-3'>
        <span className='text-md font-semibold'>Subject</span>
        <select className='py-2 w-[260px] text-[12px] font-medium outline-none border-[0.5px] border-blue-400 rounded-md' onChange={e => setSubject(e.target.value)}>
          <option value="">---SELECT SUBJECT---</option>
          {
            searchData?.map((item, index) => {
              return <option value={item} key={index}>{item}</option>
            })
          }
        </select>
      </div>
      <div className='w-full flex flex-row justify-center items-center gap-3'>
        <span className='text-md font-semibold'>Category</span>
        <select className='py-2 w-[260px] text-[12px] font-medium outline-none border-[0.5px] border-blue-400 rounded-md' onChange={e => setCategory(e.target.value)}>
          <option value="">---SELECT CATEGORY---</option>
          {
            searchCat?.map((item, index) => {
              return <option value={item} key={index}>{item}</option>
            })
          }
        </select>
      </div>
      <span className='p-2 text-white bg-blue-500 rounded-md' onClick={() => (subject && category) && handleSearch()}>Search</span>
      {fetchedData && <Table data={fetchedData} />}
    </div>
  )
}

export default Search