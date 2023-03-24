import { Row, Col } from "react-bootstrap";
import './notificationform-style.css';
import sircleImg from '../../res/img/sircle.png';
import DateForm from "../dateform/DateForm";
import { parseTime } from "../../datafunc";

// import newApplicationIm from '../../res/img/newApplication.svg'
// import OKIm from '../../res/img/OK.png';
import iplementerIm from'../../res/img/notifications/iplementer.png';
import setIplementerIm from'../../res/img/notifications/setIplementer.png';
import closedTaskByAuthorIm from '../../res/img/notifications/closedTaskByAuthor.png';
import rejectedIm from '../../res/img/notifications/rejected.svg';
import newApplicationIm from '../../res/img/notifications/newApplication.png';
import rewiewIm from '../../res/img/notifications/rewiew.png';
import newIm from '../../res/img/notifications/new.png';

import { acceptApplicationColor, closedTaskByAuthorColor, newApplicationColor, rejectedColor, rewieColor, setIplementerColor } from "../../res/colors";


/*
const {
    user,
    type,
    affected_object_id,
    message,
    checked,
    created_at,
  } = props.data;
*/

const NotificationForm = props => {

  console.log(props);
  const d = 30;
  const getInfoByType = () => {
    switch (props.data.type) {
      case 'closed_task_notification':
        return {
          image: closedTaskByAuthorIm,
          text:  props.data.message,
          color: closedTaskByAuthorColor.value(),
          imgColor: closedTaskByAuthorColor.add_v(d).value(),
          time: props.data.created_at,
        }
      case 'application_rejected_notification':
        return {
          image: rejectedIm,
          text:  props.data.message,
          color: rejectedColor.value(),
          imgColor: rejectedColor.add_v(d).value(),
          time: props.data.created_at,
        }
      case 'application_notification':
        return {
          image: newApplicationIm,
          text:  props.data.message,
          color: newApplicationColor.value(),
          imgColor: newApplicationColor.add_v(d).value(),
          time: props.data.created_at,
        }
      case 'application_accepted_notification':
        return {
          image: iplementerIm,
          text:  props.data.message,
          color: acceptApplicationColor.value(),
          imgColor: acceptApplicationColor.add_v(d).value(),
          time: props.data.created_at,
        }
      case 'set_task_implementer_notification':
        return {
          image: setIplementerIm,
          text:  props.data.message,
          color: setIplementerColor.value(),
          imgColor: setIplementerColor.add_v(d).value(),
          time: props.data.created_at,
        }
      case 'review_notification':
        return {
          image: rewiewIm,
          text:  props.data.message,
          color: rewieColor.value(),
          imgColor: rewieColor.add_v(d).value(),
          time: props.data.created_at,
        }
      default:
        break;
    }
  }

  const info = getInfoByType();

  return (
    <div 
     className={`notification-container shadow ${props.CLASS}`}
     style={{backgroundColor: info.color}}
    >
      <Row>
        <Col md="auto">
          <div style={{
            border: "5px solid black", 
            borderRadius: "10px",
            width: "120px",
            height: "120px",
            padding: "5px",
            backgroundColor: info.imgColor,
          }}>
            <img
              src={info.image}
              width="100%"
            />
          </div>
        </Col>
        <Col>
          <div className="notify-text" style={{
            width: "100%", 
            backgroundColor: info.imgColor,
            padding: "5px",
            border: "2px solid black", 
            borderRadius: "10px",
            }}>
            {info.text}
          </div>
          <Row>
            <Col>
              {!props.data.checked && 
                <img
                  width="50px"
                  src={newIm}
                  style={{marginTop: "8px"}}
                />
              }
            </Col>
            <Col>
              <div className="notify-text" style={{
                backgroundColor: info.imgColor,
                border: "2px solid black", 
                borderRadius: "10px",
                padding: "5px",
                marginTop: "10px",
                textAlign: "center"
              }}>
                {parseTime(info.time).inDMH}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

/*
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
*/

export default NotificationForm;