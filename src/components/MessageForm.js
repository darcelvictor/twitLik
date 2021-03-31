import React from "react";
import styled from "styled-components";

const MessageForm = ({
  className,
  handleSubmit,
  handleKeyDown,
  handleChange,
  values,
  errors,
  user,
}) => {
  return (
    <form onSubmit={handleSubmit} className={className}>
      <div>
        <div>
          <img src={user.photoURL} alt="profil" />
        </div>
        <textarea
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={values.message}
          name="message"
          placeholder="Quoi de neuf ?"
        />
      </div>
      {errors && <p>{errors.message}</p>}
      <footer>
        <p style={{ color: values.message.length > 280 && "red" }}>
          {280 - values.message.length}
        </p>
        <button
          type="submit"
          disabled={values.message.length > 280 || values.message.length === 0}
        >
          tweeter
        </button>
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
  p {
    color: #d9534f;
  }
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
    p {
      color: black;
    }
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
