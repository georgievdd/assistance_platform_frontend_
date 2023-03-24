import { useEffect, useState } from "react"
import { priorityError } from "../errors/validation/index";
import { isEmailE, isEmptyE, maxLengthE, minLengthE } from "../errors/validation";

const useValidation = (value, validations) => {

  const [isEmpty, setIsEmpty]     = useState(false);
  const [minLength, setMinLength] = useState(false);
  const [maxLength, setMaxLength] = useState(false);
  const [noValid, setNoValid]     = useState(false);
  const [isEmail, setIsEmail]     = useState(false);


  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLength(minLengthE);
          } else {
            setMinLength(false);
          }
          break;

        case 'maxLength':
          if (value.length > validations[validation]) {
            setMaxLength(maxLengthE);
          } else {
            setMaxLength(false);
          }
          break;
      
        case 'isEmpty':
          if (value.trim().length) {
            setIsEmpty(false)
          } else {
            setIsEmpty(isEmptyE);
          }
          break;

        case 'isEmail':
          if (value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )) {
            setIsEmail(false);
          } else {
            setIsEmail(isEmailE);
          }
      }
    }
  }, [value]);

  useEffect(() => {
    // setNoValid(!(isEmpty || minLength || maxLength));

    if (isEmpty || minLength || maxLength || isEmail) {
      setNoValid(priorityError([isEmpty, minLength, maxLength, isEmail]).text);
    } else {
      setNoValid(false);
    }

  }, [isEmpty, minLength, maxLength, isEmail]);

  return {
    noValid,
  }
}


export default useValidation;