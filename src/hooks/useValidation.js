import { useEffect, useState } from "react"
import { compareE, isCheckedE, priorityError } from "../errors/validation/index";
import { isEmailE, isEmptyE, maxLengthE, minLengthE } from "../errors/validation";
import { contains } from "../datafunc";

const useValidation = (value, validations) => {

  const [isEmpty, setIsEmpty]         = useState(false);
  const [minLength, setMinLength]     = useState(false);
  const [maxLength, setMaxLength]     = useState(false);
  const [noValid, setNoValid]         = useState(false);
  const [isEmail, setIsEmail]         = useState(false);
  const [isChecked, setIsChecked]     = useState(false);
  const [compare, setCompare]         = useState(false);

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

        case 'isChecked':
          if (value) {
            setIsChecked(false);
          } else {
            setIsChecked(isCheckedE);
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
          break;
        case 'compare':
          if (value === validations[validation]) {
            setCompare(false);
          } else {
            setCompare(compareE);
          }
      }
    }
  }, [value, contains('compare', validations) ? validations['compare'] : {}]);

  useEffect(() => {
    // setNoValid(!(isEmpty || minLength || maxLength));

    if (isEmpty || minLength || maxLength || isEmail || isChecked || compare) {
      setNoValid(priorityError([isEmpty, minLength, maxLength, isEmail, isChecked, compare]).text);
    } else {
      setNoValid(false);
    }

  }, [isEmpty, minLength, maxLength, isEmail, isChecked, compare]);

  return {
    noValid,
  }
}


export default useValidation;