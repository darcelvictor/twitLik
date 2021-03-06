import React, { useContext } from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import FirebaseContext from "../firebase/context";

const Header = ({ className }) => {
  const { user, firebase } = useContext(FirebaseContext);
  return (
    <header className={className}>
      <h1>Test</h1>
      {user ? (
        <button type="button" onClick={() => firebase.logout()}>
          <FaFacebook />
          Logout
        </button>
      ) : (
        <button type="button" onClick={() => firebase.login("facebook")}>
          <FaFacebook />
          Login
        </button>
      )}
    </header>
  );
};

export default styled(Header)`
  border: 1px solid #dbdcdc;
  border-top: 0;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  h1 {
    flex: 1;
    margin: 0.5rem 0;
    font-weight: 900;
    font-size: 1.4rem;
  }
  button {
    background: #3b5998;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 500px;
    transition: 200ms;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.9;
  }
  button > * {
    margin-right: 0.5rem;
  }
`;
