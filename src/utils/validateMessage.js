const validateMessage = (values) => {
  const errors = {};
  if (!values.message) {
    error.message = "message requis";
  } else if (values.message > 280) {
    errors.message = "le message ne doit pas excedé 280 caracteres";
  }
  return errors;
};

export default validateMessage;
