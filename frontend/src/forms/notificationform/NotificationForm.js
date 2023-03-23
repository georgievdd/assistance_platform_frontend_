import { Row, Col } from "react-bootstrap";
import './notificationform-style.css';
import sircleImg from '../../res/img/sircle.png';
import DateForm from "../dateform/DateForm";
import { parseTime } from "../../datafunc";

import newApplicationIm from '../../res/img/newApplication.svg'
import OKIm from '../../res/img/OK.png';
import iplementerIm from'../../res/img/iplementer.png';
import setIplementerIm from'../../res/img/setIplementer.png';
import newIm from'../../res/img/new.png';

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

  const getInfoByType = () => {
    switch (props.data.type) {
      // case 'set_task_implementer_notification':
      //   return {
      //     image: newApplicationIm,
      //     text:  props.data.message,
      //     color: "rgb(106,219,206)",
      //     time: props.data.created_at,
      //   }
      case 'application_notification':
        return {
          image: OKIm,
          text:  props.data.message,
          color: "rgb(43,196,138)",
          imgColor: "rgb(83,236,178)",
          time: props.data.created_at,
        }
      case 'application_accepted_notification':
        return {
          image: iplementerIm,
          text:  props.data.message,
          color: "rgb(43,196,138)",
          imgColor: "rgb(83,236,178)",
          time: props.data.created_at,
        }
      case 'set_task_implementer_notification':
        return {
          image: setIplementerIm,
          text:  props.data.message,
          color: "rgb(106,219,206)",
          imgColor: "rgb(136,249,246)",
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
              {props.data.checked && 
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