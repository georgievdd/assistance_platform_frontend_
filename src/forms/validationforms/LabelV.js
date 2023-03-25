import React from 'react'

const LabelV = props => {

  const {
    object,
    error,
    ok,
    style,
    stat,
  } = props;

  const getText = () => {
    switch (object.mod) {
      case "valid":
        return ok ? ok : '';
    
      case "invalid":
        return error ? error : object.noValid;

      case "simple":
        if (stat) return ok;
    }
  }

  if (!stat && object.mod === 'simple') return <div></div>
  
  return (
    <div className={"label-" + object.mod} style={{...style}}>
      {getText()}
    </div>
  )
}

export default LabelV;