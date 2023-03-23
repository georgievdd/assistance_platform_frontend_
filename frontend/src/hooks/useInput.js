import { useEffect, useState } from "react"
import useValidation from "./useValidation";


const useInput = (initValue, validations) => {

  const [value, setValue] = useState(initValue);
  const [onBlurState, setOnBlur] = useState(false);
  const [mod, setMod] = useState('simple');
  const valid = useValidation(value, validations);
  
  //onBlur
  // useEffect(() => {
  //   if (onBlurState) {
  //     if (valid.isValid) {
  //       setMod('valid');
  //     } else {
  //       setMod('invalid')
  //     }
  //   }
  // }, [onBlurState]);

  useEffect(() => {

    if (!valid.noValid) {
      setMod('valid');
    } else {
      if (onBlurState){ 
        setMod('invalid');
      } else {
        setMod('simple');
      }
    }


  }, [valid.noValid, onBlurState, value])


  //value
  // useEffect(() => {
  //   console.log("value", value);
  //   console.log("valid", valid.isValid);
  //   if (valid.isValid) {
  //     setMod('valid');
  //   } else {

  //     if (!onBlurState) {
  //       setMod('simple');
  //     } else {
  //       setMod('invalid');
  //     }
  //   }

  // }, [value]);

  const onBlur = () => {
    setOnBlur(true);
  }

  const onChange = e => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange,
    mod,
    onBlur,
    ...valid,
  }

}

export default useInput;