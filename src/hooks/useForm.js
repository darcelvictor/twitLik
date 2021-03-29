import { useState, useEffect } from "react";

const useForm = (initial_state, validate, next) => {
  const [values, setValues] = useState(initial_state);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setisSubmitting] = useState(false);

  //verifie les erreurs
  useEffect(() => {
    if (isSubmitting) {
      const isError = Object.keys(errors).length !== 0;
      if (isError) {
        setisSubmitting(false);
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

  //Change form values
  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    setisSubmitting(true);
  };
  return {
    handleSubmit,
    handleKeyDown,
    handleChange,
    values,
    errors,
  };
};

export default useForm;
