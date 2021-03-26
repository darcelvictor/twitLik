import { useState } from "react";

const useForm = (INITIAL_STATE, next) => {
  const [values, setValues] = useState(INITIAL_STATE);
  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      next();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    next();
  };

  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleKeyDown,
    handleChange,
    values,
  };
};

export default useForm;
