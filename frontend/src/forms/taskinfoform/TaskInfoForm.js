import './taskforminfo-style.css';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const toLoginPath = '/comein/';

const TaskInfoForm = props => {

	const navigate = useNavigate();

	const {isAuth, access} = useAuth();

	const applyHandler = () => {
		if (!!!isAuth) {
			navigate(toLoginPath);
			alert("Need to log in!");
			return;
		}

		props.data.setTaskInfoShow(false);
		props.data.setFinalApplyShow(true);

	}

	return (
		<Modal
      show={props.show}
			onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<div className='date'>{props.data.created_at}</div>
				<div className='price'>Price: {props.data.price}</div>
					<Row style={{width: "60%", paddingLeft: "15px", marginBottom: "25px"}}>
						{props.data.tags.map(element => 
							<Col className='prioritystack-element' style={{width: "auto"}}>
								<p>{ element }</p>
							</Col>	
						)}
					</Row>
				<div className="description">
					<p>{ props.data.description }</p>
					<p>FAILS</p>
				</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={applyHandler}>apply</Button>
      </Modal.Footer>
    </Modal>
	)
}

export default TaskInfoForm;

/*
<div className='container-element shadow taskinfoform-container' style={{minHeight: "700px"}}>
			<h2>TaskInfo</h2>
			<div className='date'>{date}</div>
			<div className='price'>Price: {price}</div>
			<Row style={{width: "60%", paddingLeft: "15px", marginBottom: "25px"}}>
				{stackArray.map(element => 
					<Col className='prioritystack-element' style={{width: "auto"}}>
						<p>{ element }</p>
					</Col>	
				)}
			</Row>
			<div className="description">
				<p>{ descriptionText }</p>
				<p>FAILS</p>
				<button onClick={func}>click</button>
			</div>
		</div>
*/