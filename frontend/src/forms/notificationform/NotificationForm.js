import { Row, Col } from "react-bootstrap";
import './notificationform-style.css';
import sircleImg from '../../res/img/sircle.png';
import DateForm from "../dateform/DateForm";
import { parseTime } from "../../datafunc";

const NotificationForm = props => {

  const {
    user,
    type,
    affected_object_id,
    message,
    checked,
    created_at,
  } = props.data;

  const time = parseTime(created_at);

  return (
    <div className='application-container shadow'>
      <Row>
        <Col md="auto" style={{width: "90%"}}>
          <h5 className="title" style={{marginLeft: "90px"}}>{type}</h5>
        </Col>
        {!checked &&
        <Col>
          <h5 style={{color: "red", fontWeight: "bold", fontSize: "20px"}}>!</h5>
        </Col>}
      </Row>
      <h5 style={{fontSize: "17px", width: "250px", marginLeft: "90px", margin: "0 90px"}}>{message}</h5>
      <div style={{float: "right"}}>
        <p style={{marginBottom: "0", textAlign: "center"}}>{time.month + ' ' + time.day + ', ' + time.hour + ':' + time.minutes}</p>
      </div>
    </div>
  )
}

export default NotificationForm;