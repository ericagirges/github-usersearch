import React from 'react';
// components
import UserCard from './UserCard';

const SearchResults = props => {

    const totalResults = props.results.length + 1

    return (
        <div>
            <p className={props.results.length === 0 ? 'show' : 'hide'}>0 user matches for {props.keyword}</p>
            <p className={props.results.length === 0 ? 'hide' : 'show'}>{totalResults} results for {props.keyword}</p>
            {props.results.map(user => (
                <UserCard key={user.id} user={user} />
            ))}

        </div>
    )
};

export default SearchResults;