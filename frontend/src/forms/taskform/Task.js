import { Row, Col } from 'react-bootstrap';
import '../taskform/taskform-style.css';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import DateForm from '../dateform/DateForm';

const getImgPath = type => {
	if (typeof type === undefined) type = 'default';
	return require('../../res/task_logo/' + type + '.png');
	// return require('../../res/task_logo/v2/' + type + '.svg');
}

const Task = props => {

	const [taskInfoShow, setTaskInfoShow] = useState(false);
	const [finalApplyShow, setFinalApplyShow] = useState(false);
	const [sendInputValue, setSendInputValue] = useState('');

	const {access} = useAuth();

	// const propsData = {
	// 	...props.data,
	// 	setTaskInfoShow,
	// 	setFinalApplyShow,
	// }

	// const backHandler = () => {
	// 	setTaskInfoShow(true);
	// 	setFinalApplyShow(false);
	// }

	// const sendHandler = () => {
	// 	const path = HOST + VARIANT + EndPoints.TASKS + props.data.id + EndPoints.APPLY;
  //   console.log(path);
		
	// 	axios.post( 
	// 		path,
	// 		{message: sendInputValue},
	// 		{headers: { Authorization: `Bearer ${access}` }}
	// 	).then(console.log).catch(console.log);
	// }

	return (
		<div 
			className='shadow container-element task-container'
		>
			<Row>
				<Col md="auto" style={{padding: "16px", marginLeft: "15px"}}>
					<img
						onClick={() => setTaskInfoShow(true)}
						className='task-img'
						alt='load false'
						src={getImgPath(props.data.imgType)}
					/>
				</Col>
				<Col md="auto" style={{padding: "8px", width: "83%"}}>
					<div style={{height: "80px"}}>
						<Row>
							<Col md="auto"  style={{width: "85%"}} >
								<div className='mb-2'>
									<h4 style={{ marginBottom: "0px" }} className='title'>{props.data.title}</h4>
								</div>
								<div className='descript'>
									{props.data.description}
								</div>
							</Col>
							<Col>
								<DateForm data={props.data.created_at} />
							</Col>
						</Row>
					</div>
					<Row>
						{props.data.tags.map(element =>
							<p className='prioritystack-element' style={{ width: "auto", marginLeft: "10px"}}>{element}</p>
						)}
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default Task;