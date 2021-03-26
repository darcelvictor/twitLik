import React from "react";
import useForm from "../hooks/useForm";
import MessageForm from "./MessageForm";

const INITIAL_STATE = {
  message: "",
};
const CreateMessage = () => {
  const handleCreateMessage = () => {
    console.log(values);
  };
  const { handleSubmit, handleKeyDown, handleChange, values } = useForm(
    INITIAL_STATE,
    handleCreateMessage
  );
  return (
    <MessageForm
      handleSubmit={handleSubmit}
      handleKeyDown={handleKeyDown}
      handleChange={handleChange}
    />
  );
};

export default CreateMessage;
