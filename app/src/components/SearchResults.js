import React from 'react';
// components
import UserCard from './UserCard';

const SearchResults = props => {

    return (
        <div>
            {props.map(user => (
                <UserCard key={user.id} user={user} />
            ))}

        </div>
    )
};

export default SearchResults;