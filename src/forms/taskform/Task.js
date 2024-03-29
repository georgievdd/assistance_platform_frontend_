import { Row, Col } from 'react-bootstrap';
import '../taskform/taskform-style.css';
import { useAuth } from '../../hooks/useAuth';
import DateForm from '../dateform/DateForm';
import { useNavigate } from 'react-router-dom';
import { createRoute, LOGIN, TASKS } from '../../components/routes/Routs';
import { useDispatch } from 'react-redux';
import redactImg from '../../res/img/pencil.svg'; 
import bell from '../../res/img/sb-gurb.png';
import { contains, getElById, getSecondElByFirstElInArray } from '../../datafunc';
import CircleN from '../supportiveforms/CircleN';

const getImgPath = (type, id) => {

	try {
		return require('../../res/task_logo/rus/' + type + '.png');
	} catch (e) {
		try {
			return require('../../res/task_logo/rus/' + type.toLowerCase() + '.png');
		} catch (e) {
			return require('../../res/task_logo/rus/' + 'default' + '.png');
		}
	}

	// let type = typeIn;
	// if (typeof type === 'undefined') type = 'default';
	// return require('../../res/task_logo/rus/' + type + '.png');
}

const Task = props => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {isAuth} = useAuth();

	const {
		mod,
		index,
	} = props;
	
	const {
		redactTask,
		chooseApplicationsInformation,
		closeTask,
	} = props.modFunc;

	const {
		id, 
		imgType,
		created_at,
		title,
		description,
		subject,
		tags,
		implementer,
		status,
	} = props.data;

	const {subjects_info} = props;


	const taskOnClick = () => {
		switch (mod) {
			case "taskInfo":
				// dispatch(setTaskInfo(props.data));
				navigate(createRoute([TASKS, id]));
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
				{/* {
					contains("taskApplicationsShow", mod) &&
					<div className='task-move-win-container'>
						<div className='task-move-win'>
						
						</div>
					</div>	
				} */}
				<Row>
					<Col md="auto" style={{padding: "16px", marginLeft: "15px"}}>
						<img
							className='task-img'
							alt='load false'
							src={getImgPath(imgType, id)}
						/>
					</Col>
					<Col md="auto" style={{padding: "8px", width: "83%"}}>
						<div>
							<Row>
								<Col md="auto"  style={{width: "80%", marginBottom: "10px"}} >
									<div className='mb-2' style={{ marginBottom: "0px" }}>
										<h4 className='title'>{title}</h4>
									</div>
									<div className='descript'>
										{description}
									</div>
								</Col>
								<Col>
									<div>
										<DateForm data={created_at}/>
									</div>
								</Col>
							</Row>
						</div>
						<div>
							<div style={{display: "inline-block"}}>
								<Row>
									<div className='prioritysubject-element' style={{ width: "auto", marginLeft: "10px"}}>
										<div style={{marginTop: "-2px"}}>
											{subjects_info && getElById(subject, subjects_info)}
										</div>
									</div>
									{
									tags.map(element =>
											<div className='prioritystack-element' style={{ width: "auto", marginLeft: "10px"}}>
												<div style={{marginTop: "-2px"}}>
													{element}
												</div>
											</div>
									)}
								</Row>
							</div>



						
							{status === 'C' && 

								<div style={{display: "inline-block", float: "right", paddingRight: "15px"}}>
									<div style={{
										border: "2px solid",
										padding: "8px",
										borderRadius: "10px",
										backgroundColor: "rgb(45,185,104)",
										width: "250px",
										textAlign: "center",
									}}>
										Закрыто
									</div>
								</div>
							}



							{contains("taskRedact", mod) && status !== 'C' &&
								<div style={{display: "inline-block", float: "right", paddingRight: "15px"}}>
									<img
										src={redactImg}
										width="50px"
										onClick={() => redactTask(index)}
									/>
								</div>
							}
							{contains("taskApplicationsShow", mod) && status !== 'C' &&
								(
								implementer ? 
								<div style={{display: "inline-block", float: "right", paddingRight: "15px"}}>
									<div onClick={() => closeTask(index)} style={{
										border: "2px solid",
										padding: "8px",
										borderRadius: "10px",
										backgroundColor: "rgb(230,224,214)",
										width: "180px",
										textAlign: "center",
									}}>
										Закрыть задание
									</div>
								</div>
								: 
								<div style={{display: "inline-block", float: "right", paddingRight: "15px"}}>
									<div onClick={() => chooseApplicationsInformation(index)} style={{
										border: "2px solid",
										padding: "8px",
										borderRadius: "10px",
										backgroundColor: "rgb(250,244,234)",
										width: "180px",
										textAlign: "center",
									}}>
										Просмотреть заявки
									</div>
								</div>
								)
							}
						</div>
					</Col>
				</Row>
			</div>
	);
}

export default Task;