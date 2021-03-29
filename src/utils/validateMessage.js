const validateMessage = (values) => {
  const errors = {};
  if (!values.message) {
    error.message = "message requis";
  } else if (values.message.length > 280) {
    errors.message = "Le message ne doit pas exceder 280 caracteres";
  }
  return errors;
};

export default validateMessage;
