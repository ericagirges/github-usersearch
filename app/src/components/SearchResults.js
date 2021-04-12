import React from 'react';
import styled from 'styled-components';
// components
import UserCard from './UserCard';

const TotalResults = styled.p `
    margin-bottom: 20px;
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
`

const SearchResults = props => {

    const totalResults = props.results.length

    return (
        <div>
            <TotalResults className={props.results.length === 0 ? 'show' : 'hide'}>0 user matches for "{props.keyword}"</TotalResults>
            <TotalResults className={props.results.length === 1 ? 'show' : 'hide'}>{totalResults} result for "{props.keyword}"</TotalResults>
            <TotalResults className={props.results.length <= 1 ? 'hide' : 'show'}>{totalResults} results for "{props.keyword}"</TotalResults>
            {props.results.map(user => (
                <UserCard key={user.id} user={user} />
            ))}

        </div>
    )
};

export default SearchResults;