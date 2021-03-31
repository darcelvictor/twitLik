import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

const ColorIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: 200ms;
  }
  :hover {
    div,
    p {
      color: ${(props) => props.iconcolor};
    }
    div {
      background-color: ${(props) => lighten(0.35, props.iconcolor)};
    }
  }
`;

const IconContainer = ({ iconcolor, children, count, ...props }) => {
  return (
    <ColorIcon iconcolor={iconcolor} {...props}>
      <div>{children}</div>
      {count > 0 && <p>{count}</p>}
    </ColorIcon>
  );
};

export default IconContainer;
