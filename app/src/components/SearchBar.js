import React, { useState } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([])

    const changeHandler = e => {
        setQuery(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.github.com/search/users?q=${query} in:login`)
        .then((response) => {
            console.log(response.data);
            setResults(response.data);
        }).catch((error) => {
            console.log(error)
        })
        setQuery('')
    }

    return (
        <div>
            <input value={query} type="text" onChange={changeHandler} placeholder='Enter username here...'></input>
            <button onSubmit={handleSubmit}>Search</button>
            <SearchResults results={results}/>
        </div>
    )
};

export default SearchBar;