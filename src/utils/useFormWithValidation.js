import { useCallback, useState } from "react";

//хук управления формой и валидации формы
export default function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {

    const { name, value } = event.target;

    if (name === "email") {
      let rex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      console.log(rex)
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: event.target.validationMessage });
      setIsValid(rex);
      console.log(isValid)
    }
    // setValues({ ...values, [name]: value });
    // setErrors({ ...errors, [name]: event.target.validationMessage });
    // setIsValid(event.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}