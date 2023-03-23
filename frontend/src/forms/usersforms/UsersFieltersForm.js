import React from 'react'
import { Form } from 'react-bootstrap';

const translate = e => {
  switch (e) {
    case "author": return 'автора';
    case "implementer": return 'исполнителя';
  }
}

const UsersFieltersForm = props => {

  const {
    fieltersArray,
    fielters,
    fieltersHandler,
  } = props.data;

  return (
    <div className='container-element' style={{padding: "20px"}}>
      <h5 className='mb-3'>Сортировать по рейтингу</h5>
      <div className='pb-1'>
        {fieltersArray.map((element, index) =>
          <div className="category-element">
            <Form.Check 
              type="checkbox"
              checked={fielters[index]}
              label={translate(element)}
              onClick = {() => fieltersHandler(index)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default UsersFieltersForm;