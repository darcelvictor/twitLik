import React from "react";
import styled from "styled-components";

const MessageForm = ({ className, handleSubmit, handleKeyDown }) => {
  return (
    <form onSubmit={handleSubmit} className={className}>
      <div>
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1070106683316338688/mJxptTmV_400x400.jpg"
            alt="profil"
          />
        </div>
        <textarea
          onKeyDown={handleKeyDown}
          name="message"
          placeholder="Quoi de neuf ?"
        />
      </div>
      <footer>
        <p>280</p>
        <button type="submit">tweeter</button>
      </footer>
    </form>
  );
};

export default styled(MessageForm)`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6ecf0;
  border-width: 0 1px 12px;
  padding: 0.5rem 1rem;
  div {
    display: flex;
    img {
      border-radius: 50%;
      margin-right: 1rem;
      max-width: 40px;
      max-height: 40px;
    }
    textarea {
      border: none;
      width: 100%;
      padding: 0 0 0.5rem;
      outline: none;
      font-size: 1.2rem;
    }
  }
  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      align-self: flex-end;
      border-radius: 500px;
      padding: 0.4rem 1rem;
      font-weight: 700;
      background: #1da1f2;
      color: #fff;
      margin-left: 0.5rem;
    }
    button:disabled {
      opacity: 0.5;
    }
  }
`;
