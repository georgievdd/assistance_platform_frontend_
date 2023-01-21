import { Row, Col } from 'react-bootstrap';
import '../taskform/taskform-style.css';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import DateForm from '../dateform/DateForm';
import { useNavigate } from 'react-router-dom';
import { LOGIN, TASKINFO } from '../../components/routes/Routs';
import { useDispatch } from 'react-redux';
import { setTaskInfo } from '../../store/slices/actionCreators';

const getImgPath = type => {
	if (typeof type === undefined) type = 'default';
	return require('../../res/task_logo/' + type + '.png');
	// return require('../../res/task_logo/v2/' + type + '.svg');
}

const Task = props => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {isAuth} = useAuth();

	const taskOnClick = () => {
		switch (props.mod) {
			case "taskInfo":
				if (!!!isAuth) {
					navigate(LOGIN);
					alert("Need to log in!");
					break;
				}

				dispatch(setTaskInfo(props.data));
				navigate(TASKINFO);
				break;
		
			default:
				break;
		}
	}

	return (
		<div 
			className='shadow container-element task-container'
			onClick={() => taskOnClick()}
		>
			<Row>
				<Col md="auto" style={{padding: "16px", marginLeft: "15px"}}>
					<img
						className='task-img'
						alt='load false'
						src={getImgPath(props.data.imgType)}
					/>
				</Col>
				<Col md="auto" style={{padding: "8px", width: "83%"}}>
					<div style={{height: "80px"}}>
						<Row>
							<Col md="auto"  style={{width: "80%"}} >
								<div className='mb-2'>
									<h4 style={{ marginBottom: "0px" }} className='title'>{props.data.title}</h4>
								</div>
								<div className='descript'>
									{props.data.description}
								</div>
							</Col>
							<Col>
								<DateForm data={props.data.created_at}/>
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