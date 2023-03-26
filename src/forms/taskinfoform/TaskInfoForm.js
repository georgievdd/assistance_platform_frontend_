import './taskforminfo-style.css';
import { Row, Col, Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { getElById, parseTime } from '../../datafunc';
import { useState } from 'react';
import { HOST, VARIANT } from '../../api/instance';
import EndPoints from '../../api/endPoints';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { sendApplication } from '../../store/slices/actionCreators';


const IMG = type => {
	return require('../../res/files/' + type + '.png');
}

const TaskInfoForm = props => {

	// console.log(props);

	const [message, setMessage] = useState('');
	const {access} = useAuth();
	const dispatch = useDispatch();

	const date = t => {
		const {
			month,
			day,
			hour,
			minutes
		} = parseTime(t);
		return month + " " + day + ", " + hour + ":" + minutes;
	}

	const files = [
		{
			type: "pdf",
		},
		{
			type: "doc",
		},
		{
			type: "pptx",
		},
	];

	const buttonHandler = () => {
		dispatch(sendApplication(access, props.data.id, message));
	}

	return (

		<div className='taskinfoform-container container-element-white shadow'>
			<Form>
				<Row style={{marginBottom: "20px"}}>
					<Col md="auto" style={{width: "30%"}}>
						<div className='title' style={{fontSize: "20px", paddingLeft: "10px", marginBottom: "15px", fontWeight: 'bold'}}>
							{props.data.title}
						</div>
						<div style={{paddingLeft: "20px", marginBottom: "20px"}}>
							<div className='date'>{date(props.data.created_at)}</div>
							<div className='price'>Вознаграждение: {props.data.price}</div>
						</div>
						<div style={{width: "200px", paddingLeft: "15px", marginBottom: "25px"}}>
							{props.data.tags.map(element => 
								<div className='prioritystack-element' style={{width: "auto", marginBottom: "10px"}}>
									<p>{ getElById(element, props.tags_info) }</p>
								</div>	
							)}
						</div>
					</Col>
					<Col md="auto" style={{width: "70%"}}>
						<div className='description'>
							{props.data.description}
						</div>
					</Col>
				</Row>
				<div style={{marginBottom: "30px"}}>
					<div style={{marginLeft: "10px"}}>
						<h5>Прикрепленные файлы</h5>
					</div>
					<div style={{padding: "10px"}} className='borderTopBottom'>{
						files.map(file => (
							<img
								className='file'
								src={IMG(file.type)}
							/>))}
					</div>
				</div>
				<FloatingLabel
						label="Сообщение автору"
						className="mb-4"
					>
					<Form.Control
						type="text"
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
				</FloatingLabel>
				<Button variant="success" style={{width: "16%", marginLeft: "42%"}} onClick={buttonHandler}>
					Оставить заявку
				</Button>
			</Form>
		</div>

		// <Modal
    //   show={props.show}
		// 	onHide={props.onHide}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       {props.data.title}
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
		// 		<div className='date'>{props.data.created_at}</div>
		// 		<div className='price'>Price: {props.data.price}</div>
		// 			<Row style={{width: "60%", paddingLeft: "15px", marginBottom: "25px"}}>
		// 				{props.data.tags.map(element => 
		// 					<Col className='prioritystack-element' style={{width: "auto"}}>
		// 						<p>{ element }</p>
		// 					</Col>	
		// 				)}
		// 			</Row>
		// 		<div className="description">
		// 			<p>{ props.data.description }</p>
		// 			<p>FAILS</p>
		// 		</div>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button onClick={applyHandler}>apply</Button>
    //   </Modal.Footer>
    // </Modal>
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