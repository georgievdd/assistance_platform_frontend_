import './tasksform-style.css';
import { Row, Col } from 'react-bootstrap';
import loupe from '../../res/img/loupe.svg';
import Task from '../taskform/Task';
const FormWithTasks = props => {

	const {
		tasks, 
		searchValue, 
		searchHandler,
		taskMod,
		taskModFunctions,
	} = props.data;

	return (
		<div>
			<div className='container-element shadow' style={{height: "125px", marginBottom: "15px"}}>
				<Row>
					<Col xs><h4 className='tasks-search-header'>{props.data.searchTitle} ({tasks.length})</h4></Col>
				</Row>
				<div >
					<Row style={{width: "100%"}}>
						<Col style={{width: "100%", paddingLeft: "30px"}}><input
							id="search"
							placeholder='Введите задание'
							className='search-input'
							value={searchValue}
							onChange={e => searchHandler(e)}
						/></Col>
						<Col md="auto"><img
							className='search-header-img'
							style={{marginRight: "auto", marginLeft: "auto"}}
							src={loupe}
						/></Col>
					</Row>
				</div>
			</div>
			{tasks.length && tasks.map((task, index) =>
				<div style={{zIndex: 10}}>
					<Task 
						index={index}
						data={task} 
						mod={taskMod} 
						modFunc={taskModFunctions}
					/>
				</div>
			)}
		</div>
	);
}

export default FormWithTasks;