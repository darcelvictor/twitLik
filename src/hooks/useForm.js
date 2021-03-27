import { useState, useEffect } from "react";
import validateMessage from "../utils/validateMessage";

const useForm = (initial_state, validate, next) => {
  const [values, setValues] = useState(initial_state);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setisSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const error = Object.keys(errors).length !== 0;
      if (error) {
        setisSubmitting = false;
      } else {
        next();
        setValues(initial_state);
        setisSubmitting(false);
      }
    }
  }, [errors, next, isSubmitting, initial_state]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      next();
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateMessage(values);
    setErrors(errors);
    setisSubmitting(true);
  };
  return {
    handleSubmit,
    handleKeyDown,
    handleChange,
    values,
  };
};

export default useForm;
