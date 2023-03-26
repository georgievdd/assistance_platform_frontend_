import React, { useEffect, useState } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TaskInfoForm from '../../../forms/taskinfoform/TaskInfoForm';
import { useAuth } from '../../../hooks/useAuth';
import { getTaskById } from '../../../store/slices/actionCreators';
import { useTaskInformation } from '../../../hooks/useTaskInformation';

const TaskInformationP = () => {

  const { id } = useParams();
  const { access } = useAuth();
  const dispatch = useDispatch();
  const {task} = useTaskInformation();
  const [conditionToSend, setCondition] = useState(false);
  console.log(task);
  useEffect(() => {
    dispatch(getTaskById(access, id));
  }, []);

  useEffect(() => {
    if (Object.keys(task).length !== 0) {
      setCondition(true);
    } else {
      setCondition(false);
    }
  }, [task]);

  if (!conditionToSend) return <div></div>;
  return (
    <div className='main-container mt-3'>
			<TaskInfoForm data={task} />
		</div>
  )
}

export default TaskInformationP;