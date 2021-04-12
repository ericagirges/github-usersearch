import React, { useState } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [lastQuery, setLastQuery] = useState('');
    const [results, setResults] = useState([])

    const changeHandler = e => {
        setQuery(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.github.com/search/users?q=${query} in:login`)
        .then((response) => {
            console.log(response);
            setResults(response.data.items);
            setLastQuery(query);
        }).catch((error) => {
            console.log(error)
        })
        setQuery('')
    }

    console.log('RESULT', results)

    return (
        <div>
            <input value={query} type="text" onChange={changeHandler} placeholder='Enter username here...'></input>
            <button onClick={handleSubmit}>Search</button>
            <SearchResults results={results} keyword={lastQuery}/>
        </div>
    )
};

export default SearchBar;