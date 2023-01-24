import React from 'react'

const RedactMyApplicationsForm = props => {

  if (props.data == null || props.task == null) return <div></div>;

  const {
    applicant,
    applicant_username,
    created_at,
    implementer_rating_normalized,
    message,
    status,
    updated_at,
  } = props.data;

  const {task} = props;

  return (
    <div className='container-element shadow'>
      {task.title}
    </div>
  )
}

export default RedactMyApplicationsForm;