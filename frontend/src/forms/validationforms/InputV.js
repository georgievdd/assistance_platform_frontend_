import React from 'react';
import './validations-style.css';







const InputV = props => {



  const {
    object,
    type,
    label,
    container,
  } = props;
  console.log(label);

  const {
    mod,
    value,
    onBlur,
    onChange,
  } = object;
  
  return (
    <div className={container}>
      <input
        className={`input-${mod}`}
        type={type}
        value={value}
        required
        onBlur={onBlur}
        onChange={e => onChange(e)}/>
      {label && <span>{label}</span>}
    </div>
  )
}

export default InputV;