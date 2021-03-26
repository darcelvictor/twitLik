import React from "react";
import useForm from "../hooks/useForm";
import MessageForm from "./MessageForm";

const INITIAL_STATE = {
  message: "",
};
const CreateMessage = () => {
  const handleCreateMessage = () => console.log("submit");
  const { handleSubmit, handleKeyDown } = useForm(
    INITIAL_STATE,
    handleCreateMessage
  );
  return (
    <MessageForm handleSubmit={handleSubmit} handleKeyDown={handleKeyDown} />
  );
};

export default CreateMessage;
