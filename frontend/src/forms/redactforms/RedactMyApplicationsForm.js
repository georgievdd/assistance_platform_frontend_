import React from 'react'
import { parseTime } from '../../datafunc';

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
      <div>
      applicant: {applicant}
      </div>
      <div>
      created_at: {parseTime(created_at).hour}
      </div>
      <div>
      implementer_rating_normalized: {implementer_rating_normalized}
      </div>
      <div>
      message: {message}
      </div>
      <div>
      updated_at: {parseTime(updated_at).day}
      </div>
      <div>
      status: {status}
      </div>
      <div>
      applicant_username: {applicant_username}
      </div>
    </div>
  )
}

export default RedactMyApplicationsForm;