import React from 'react';
import { Spinner } from 'react-bootstrap';
import './spinner-style.css';

const SpinnerF = props => {
  if (!props.show) return <div></div>;
  
  const s = props.size;
  const size = {
    width: `${s}px`, 
    height: `${s}px`, 
    margin: `-${s/2}px 0 0 -${s/2}px`
  }

  return (
    <div>
      <Spinner
        style={size}
        animation="border"
        role="status"
        className='spinner'
      />
    </div>
  )
}

export default SpinnerF;