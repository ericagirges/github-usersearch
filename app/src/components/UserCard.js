import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 60%;
  border: 1px solid #e0e4e7;
  font-family: "Roboto";
  font-size: 1.4em;
  padding: 20px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  padding: 0 20px;
`;

const Username = styled.h2`
  color: #0366d6;
  font-weight: 700;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  align-self: center;
  color: black;
  background-color: #242b2e;
  border-radius: 5px;
  padding: 6px 7px;
  text-decoration: none;
  font-size: 0.75em;
  color: whitesmoke;
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: #0366d6;
  }
`;

const UserCard = (props) => {
  return (
    <UserContainer>
      <FlexContainer>
        <Avatar
          src={props.user.avatar_url}
          alt={`${props.user.login}'s avatar`}
        />
        <Username>{props.user.login}</Username>
      </FlexContainer>
      <StyledLink href={props.user.html_url}>View user profile</StyledLink>
    </UserContainer>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
