import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserDetails from "./UserDetails";

// styling
const UserContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  border: 1px solid #e0e4e7;
  font-family: "Roboto";
  font-size: 1em;
  padding: 20px;
  @media (min-width: 750px) {
    font-size: 1.2em;
    width: 60%;
  }
`;

const InnerRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InnerInnerRow = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 75px;
  width: 75px;
  padding: 0 20px;
  @media (min-width: 550px) {
    height: 100px;
    width: 100px;
  }
  @media (min-width: 750px) {
    height: 150px;
    width: 150px;
  }
`;

const Username = styled.h2`
  color: #0366d6;
  font-weight: 700;
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
  // used to display user details upon click
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = (e) => {
    e.preventDefault();

    setShowDetails(!showDetails);
  };

  return (
    <UserContainer>
      <InnerRow>
        <InnerInnerRow>
          <Avatar
            src={props.user.avatar_url}
            alt={`${props.user.login}'s avatar`}
          />
          <Username>{props.user.login}</Username>
        </InnerInnerRow>
        <div>
          <StyledLink href={props.user.html_url} target="_blank">
            View User Profile &raquo;
          </StyledLink>
          <StyledLink
            style={{ display: "block", marginTop: 10 }}
            href="#"
            onClick={handleToggleDetails}
          >
            {showDetails ? "Hide User Details" : "Show User Details"}
          </StyledLink>
        </div>
      </InnerRow>
      {showDetails && <UserDetails username={props.user.login} />}
    </UserContainer>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
