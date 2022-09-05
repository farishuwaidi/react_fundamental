import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const handleSearch =( )=>{
      setSearchParams({keyword: search})
  }
  useEffect(()=>{
    console.log(searchParams.get('keyword'));
  },[searchParams])
  return (
    <div>
      <p>{process.env.REACT_APP_API_BACKEND}</p>
      <h1>Home Page</h1>
      <input type="text" name="search" placeholder="search" onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={handleSearch}>cari</button>
      <p>hasil pencarian adalah = {searchParams.get('keyword')}</p>
    </div>
  );
};

export default Home;
