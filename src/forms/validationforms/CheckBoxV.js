import React from 'react'
import './validations-style.css';

const CheckBoxV = props => {

  const {
    object,
    label,
    container,
    id,
  } = props;

  const {
    mod,
    value,
    onBlur,
    style,
    onClick,
  } = object;

  const getClass = () => {
    if (mod === 'invalid') return 'checkbox-invalid';
    return 'checkbox-simple';
  }

  return (
    <div>
      <input
        id={`checkbox-${id}`}
        type="checkbox"
        className={getClass()}
        checked={value}
        onClick={onClick}
        onBlur={onBlur}
        style={{...style}}
      /><label htmlFor={`checkbox-${id}`}/>
    </div>
  )
}

export default CheckBoxV;