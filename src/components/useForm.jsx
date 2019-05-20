import React, { useState } from "../../node_modules/react";

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    callback();
  };

  const handleChange = e => {
    e.persist();
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };

  return {
    values,
    setValues,
    handleSubmit,
    handleChange
  };
};

export default useForm;
