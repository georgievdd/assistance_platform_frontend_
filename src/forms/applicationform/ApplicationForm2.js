import './applicationform-style.css';
import { Row, Col } from 'react-bootstrap';
import DateForm from '../dateform/DateForm';
import { parseTime } from '../../datafunc';
import './applicationform-style.css';

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

const messageStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}

const ApplicationForm2 = props => {

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

  console.log("ApplicationForm2", props.data);


  return (
    <div className="container-element application-container application" style={{
      width: "96%", 
      margin: "0 auto",
      backgroundColor: getColorByStatus(status)}}>
      <div>
        <h5 className='title' style={{marginLeft: "10px"}}>{applicant}</h5>
        <div style={messageStyle}>
         Сообщение: {message}
        </div>
        <p className='title' style={{marginTop: "10px"}}>Отправлена: {parseTime(created_at).inDMH}</p>
      </div>
    </div>
  )
}

export default ApplicationForm2;