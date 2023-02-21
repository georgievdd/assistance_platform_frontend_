import { Row, Col } from 'react-bootstrap';
import '../taskform/taskform-style.css';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import DateForm from '../dateform/DateForm';
import { useNavigate } from 'react-router-dom';
import { LOGIN, TASKINFO } from '../../components/routes/Routs';
import { useDispatch } from 'react-redux';
import { setTaskInfo } from '../../store/slices/actionCreators';
import redactImg from '../../res/img/pencil.svg'; 

const getImgPath = (type, id) => {
	if (typeof type == undefined) 
	type = 'default';
	return require('../../res/task_logo/rus/' + type + '.png');
}

const Task = props => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {isAuth} = useAuth();

	const {mod} = props;

	const taskOnClick = () => {
		switch (mod) {
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
						src={getImgPath(props.data.imgType, props.data.id)}
					/>
				</Col>
				<Col md="auto" style={{padding: "8px", width: "83%"}}>
					<div>
						<Row>
							<Col md="auto"  style={{width: "80%", marginBottom: "10px"}} >
								<div className='mb-2' style={{ marginBottom: "0px" }}>
									<h4 className='title'>{props.data.title}</h4>
								</div>
								<div className='descript'>
									{props.data.description}
								</div>
							</Col>
							<Col>
								<div>
									<DateForm data={props.data.created_at}/>
								</div>
							</Col>
						</Row>
					</div>
					<div>
						<div style={{display: "inline-block"}}>
							<Row>
								{props.data.tags.map(element =>
									<p className='prioritystack-element' style={{ width: "auto", marginLeft: "10px"}}>{element}</p>
								)}
							</Row>
						</div>
						{mod === "taskRedact" &&
							<div style={{display: "inline-block", float: "right", paddingRight: "15px"}}>
								<img
									src={redactImg}
									width="50px"
								/>
							</div>
						}
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default Task;