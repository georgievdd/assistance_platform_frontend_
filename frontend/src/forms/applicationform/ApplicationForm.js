import './applicationform-style.css';
import { Row, Col } from 'react-bootstrap';
import DateForm from '../dateform/DateForm';

// const getImgPath = type => {
//   console.log(typeof type, type);
// 	if (typeof type == null || typeof type == undefined) 
//   type = 'default';
//   console.log(typeof type);
// 	return require('../../res/task_logo/rus/' + type + '.png');
// }

const getColorByStatus = status => {
  switch (status) {
    case 'A':
      return "rgba(51, 196, 129, 1)";
    case 'R':
      return "rgba(255, 143, 107, 1)";
    case 'S':
      return "rgba(231, 237, 250, 1)";
    default:
      return "rgba(0, 0, 0, 0)";
  }
}

const ApplicationForm = props => {

  const {
    applicant,
    applicant_username,
    created_at,
    implementer_rating_normalized,
    message,
    task,
    status,
    updated_at,
  } = props.data;

  return (
    <div className="container-element application-container application" style={{
      width: "96%", 
      margin: "0 auto",
      backgroundColor: getColorByStatus(status)}}>
      <div className='mb-2' style={{ marginBottom: "0px" }}>
        <h4 className='title'>{task.title}</h4>
      </div>
    </div>
  )
}

export default ApplicationForm;