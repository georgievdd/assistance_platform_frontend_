import './applicationform-style.css';
import { Row, Col } from 'react-bootstrap';
import DateForm from '../dateform/DateForm';

const getImgPath = type => {
  console.log(typeof type, type);
	if (typeof type == null || typeof type == undefined) 
  type = 'default';
  console.log(typeof type);
	return require('../../res/task_logo/rus/' + type + '.png');
}

const ApplicationForm = props => {

  const {
    applicant,
    applicant_username,
    created_at,
    implementer_rating_normalized,
    message,
    status,
    updated_at,
  } = props.data;

  return (
    <div className="container-element application-container application" style={{width: "96%", margin: "0 auto"}}>
      <Row>
        <Col md="auto" >
          <div className='mb-2' style={{ marginBottom: "0px" }}>
            <h4 className='title'>title</h4>
          </div>
          <div className='descript'>
            descript
          </div>
        </Col>
        <Col>
          <DateForm data={props.data.created_at}/>
        </Col>
      </Row>
    </div>
  )
}

export default ApplicationForm;