import React from "react";
import styled from "styled-components";

const Header = ({ classname }) => {
  return (
    <header className={classname}>
      <h1>Test</h1>
    </header>
  );
};

export default styled(Header)`
  background-color: red;
`;
