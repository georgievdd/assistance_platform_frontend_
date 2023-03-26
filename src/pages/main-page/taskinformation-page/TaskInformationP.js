import React, { useEffect, useState } from 'react'
import { Modal, Button, Col, Row, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import TaskInfoForm from '../../../forms/taskinfoform/TaskInfoForm';
import { useAuth } from '../../../hooks/useAuth';
import { getTaskById, sendApplication } from '../../../store/slices/actionCreators';
import { useTaskInformation } from '../../../hooks/useTaskInformation';
import { useInformational_endpoint } from '../../../hooks/useInformational_endpoint';
import useInput from '../../../hooks/useInput';
import { LOGIN, TASKS } from '../../../components/routes/Routs';
import { useLoad } from '../../../hooks/useLoad';
import { getErrorTextByKey } from '../../../errors/validation';
import { setSendApplicationLoad } from '../../../store/slices/sendApplicationSlice';
import { LOAD_END } from '../../../datafunc';

const TaskInformationP = () => {

  const { id } = useParams();
  const { access, isAuth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {task} = useTaskInformation();
  const [conditionToSend, setCondition] = useState(false);
  const {tags_info} = useInformational_endpoint();

  const { error, end } = useLoad().sendApplicationLoad;

  const [isDirty, setIsDirty] = useState(false);

  const [errorText, setErrorText] = useState(false);

  const message = useInput('');
  
  
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

  const sendApply = () => {
    setIsDirty(true);
		if (!isAuth) {
      navigate(LOGIN);
      alert("Need to log in!");
      return;
    }

    dispatch(sendApplication(access, task.id, message.value))

	}

  useEffect(() => {
    if (error === '' && isDirty && end) {
      navigate(TASKS)
    } else {
      setErrorText(getErrorTextByKey(error));
      setTimeout(() => {
        setErrorText('');
      }, 2000)
    }
  }, [error]);





  if (!conditionToSend) return <div></div>;
  return (
    <div className='main-container mt-3'>
      {errorText && 
        <Alert variant='danger' style={{position: "absolute", top: '0'}}>
          {errorText}
        </Alert>
      }
			<TaskInfoForm data={{
        ...task, 
        sendApply,
        message,
        }} tags_info={tags_info}
        errorText={errorText}/>
		</div>
  )
}

export default TaskInformationP;