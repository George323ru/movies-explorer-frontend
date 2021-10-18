import { useCallback, useState } from "react";

//хук управления формой и валидации формы
export default function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      const regex = /.+@.+\.[A-Za-z]+$/.test(value);

      if (!regex) {
        setErrors({ ...errors, [name]: "Неправильный формат почты" });
        setIsValid(regex);
      } else {
        setErrors({ ...errors, [name]: event.target.validationMessage });
        setIsValid(event.target.closest("form").checkValidity());
      }
    } else {
      setErrors({ ...errors, [name]: event.target.validationMessage });
      setIsValid(event.target.closest("form").checkValidity());
    }

    setValues({ ...values, [name]: value });
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
