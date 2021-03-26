//import React from "react";

const useForm = (INITIAL_STATE, next) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      next();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    next();
  };
  return {
    handleSubmit,
    handleKeyDown,
  };
};

export default useForm;
