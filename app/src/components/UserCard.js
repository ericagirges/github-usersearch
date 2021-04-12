import React from "react";
import styled from 'styled-components';

const UserContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 80%;
    border: 1px solid #E0E4E7;
    font-family: 'Roboto';
    font-size: 1.4em;
    padding: 20px;
`

const Avatar = styled.img `
    border-radius: 50%;
    height: 150px;
    width: 150px;
`

const UserCard = props => {
    return (
        <UserContainer>
            <Avatar src={props.user.avatar_url} alt={`${props.user.login}'s avatar`}/>
            <h2>{props.user.login}</h2>
        </UserContainer>
    )
};

export default UserCard;