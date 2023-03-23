import React from 'react'

const LabelV = props => {

  const {
    object,
  } = props;

  if (object.mod !== 'invalid') return <div></div>
  
  return (
    <div className={"label-" + object.mod}>
      {object.noValid}
    </div>
  )
}

export default LabelV;