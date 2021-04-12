import React from "react";

const UserCard = props => {
    return (
        <div>
            <img src={props.user.avatar_url} alt={`${props.user.login}'s avatar`}/>
            <h2>{props.user.login}</h2>
        </div>
    )
};

export default UserCard;