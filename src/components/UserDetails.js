import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";

// styling
const UserContainer = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 0.75em;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const StyledList = styled.ul`
  text-align: left;
`;

const UserDetails = (props) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.username}`)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUserDetails({
          name: "Foo",
          followers: 100,
          following: 200,
        });
      });
  }, []);

  return (
    <UserContainer>
      {!userDetails ? (
        "Loading..."
      ) : (
        <StyledList>
          <li>Name: {userDetails.name}</li>
          <li>Followers: {userDetails.followers}</li>
          <li>Following: {userDetails.following}</li>
        </StyledList>
      )}
    </UserContainer>
  );
};

UserDetails.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserDetails;
