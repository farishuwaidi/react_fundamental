import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()
    const [search,setSearch] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        console.log(searchParams.get('keyword'))
    }, [searchParams])

    const handleSearch = () =>{
        setSearchParams({keyword: search})
    }
  return (
    <div>
        <input type="text" name='search' placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={handleSearch}>cari</button>
        <h1>Produk {id} - {searchParams.get('keyword')}</h1>
    </div>
  )
}

export default Detail
