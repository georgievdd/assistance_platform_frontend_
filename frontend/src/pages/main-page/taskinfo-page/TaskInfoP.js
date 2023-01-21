import React from 'react'
import { useTaskInfo } from '../../../hooks/useTaskInfo';
import { Modal, Button, Col, Row } from 'react-bootstrap';
import TaskInfoForm from '../../../forms/taskinfoform/TaskInfoForm';

const TaskInfoP = () => {

  const data = useTaskInfo();  

  return (
    <div className='main-container mt-3'>
			<TaskInfoForm data={data} />
		</div>
  )
}

export default TaskInfoP;