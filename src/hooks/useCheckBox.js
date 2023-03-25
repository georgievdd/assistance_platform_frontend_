import { useEffect, useState } from "react"
import useValidation from "./useValidation";


const useCheckBox = (initValue) => {

  const [value, setValue] = useState(initValue);
  const [onBlurState, setOnBlur] = useState(false);
  const [mod, setMod] = useState('simple');
  const valid = useValidation(value, {isChecked: ''});

  useEffect(() => {

    if (value === 0) {
      setMod('invalid');
      return;
    }

    if (!valid.noValid) {
      setMod('valid');
    } else {
      if (onBlurState){ 
        setMod('invalid');
      } else {
        setMod('simple');
      }
    }
    console.log("check-mod", mod);

  }, [valid.noValid, onBlurState, value])

  const onBlur = () => {
    setOnBlur(true);
  }

  const checkValidForced = () => {
    if (value !== true) {
      setValue(0);
    }
  }

  const onClick = () => {
    setValue(!value);
  }

  return {
    value,
    onClick,
    mod,
    onBlur,
    checkValidForced,
    ...valid,
  }

}

export default useCheckBox;