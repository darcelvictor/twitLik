import React from "react";
import useForm from "../hooks/useForm";
import validateMessage from "../utils/validateMessage";
import MessageForm from "./MessageForm";

const INITIAL_STATE = {
  message: "",
};
const CreateMessage = () => {
  const handleCreateMessage = () => {
    const { message } = values;
    const newMessage = {
      message,
      postedBy: {
        id: "57528",
        name: "Victor",
      },
      likes: [],
      createAt: Date.now(),
      photo: "",
    };
    console.log(newMessage);
  };
  const { handleSubmit, handleKeyDown, handleChange, values, errors } = useForm(
    INITIAL_STATE,
    validateMessage,
    handleCreateMessage
  );
  return (
    <MessageForm
      handleSubmit={handleSubmit}
      handleKeyDown={handleKeyDown}
      handleChange={handleChange}
      values={values}
      errors={errors}
    />
  );
};

export default CreateMessage;
