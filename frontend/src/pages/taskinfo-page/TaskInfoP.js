import { Row, Col } from "react-bootstrap";
import TaskInfoForm from '../../forms/taskinfoform/TaskInfoForm';
import CustomerForm from '../../forms/customerform/CustomerForm';

const TaskInfoP = props => {
	return (
		<div className="main-container">
			<Row className="pt-3 pb-3">
				<Col id="taskInfo"  md="auto" style={{width: "70%"}}>
					<TaskInfoForm />
				</Col>
				<Col id="Customer">
					<CustomerForm />
				</Col>
			</Row>
		</div>
	)
}

export default TaskInfoP;
