import React, { useEffect, useState } from 'react'
import { Modal, Button, Col, Row, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import TaskInfoForm from '../../../forms/taskinfoform/TaskInfoForm';
import { useAuth } from '../../../hooks/useAuth';
import { getTaskById, getTaskByIdAccess, sendApplication, setTask } from '../../../store/slices/actionCreators';
import { useTaskInformation } from '../../../hooks/useTaskInformation';
import { useInformational_endpoint } from '../../../hooks/useInformational_endpoint';
import useInput from '../../../hooks/useInput';
import { LOGIN, TASKS } from '../../../components/routes/Routs';
import { useLoad } from '../../../hooks/useLoad';
import { getErrorTextByKey } from '../../../errors/validation';
import { setSendApplicationLoad } from '../../../store/slices/sendApplicationSlice';
import { LOAD_END } from '../../../datafunc';
import '../../../styles/containers.css';

const TaskInformationP = () => {

  const { id } = useParams();
  const { access, isAuth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {task} = useTaskInformation();
  // console.log(task);
  const [conditionToSend, setCondition] = useState(false);
  const {tags_info, subjects_info} = useInformational_endpoint();

  const { error, end } = useLoad().sendApplicationLoad;

  const [isDirty, setIsDirty] = useState(false);

  const [errorText, setErrorText] = useState(false);

  const [timer, setTimer] = useState(false);

  const message = useInput('');
  
  
  useEffect(() => {
    if (isAuth) dispatch(getTaskByIdAccess(access, id));
    else dispatch(getTaskById(id));
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
      navigate(TASKS);
    } else {
      setErrorText(getErrorTextByKey(error));
      if (!timer) {
        setTimer(true);
        setTimeout(() => {
          setErrorText('');
          setTimer(false);
        }, 2000)
      }
    }
  }, [error]);

  useEffect(() => {
    if (error) {
      dispatch(setSendApplicationLoad(LOAD_END));
    }
  }, [])





  if (!conditionToSend) return <div></div>;
  return (
    <div className='main-container mt-3'>
      {errorText &&
      <div style={{
        position: "fixed",
        top: "20px",
        textAlign: "center",
        left: "0",
        right: "0",
      }} className="alert-danger">
        <Row>
          <Col style={{width: "25%"}} md="auto"/>
          <Col>
            <Alert variant='danger' className='alert-danger'>
              {errorText}
            </Alert>
            </Col>
          <Col  md="auto" style={{width: "25%"}}/>
        </Row>
      </div>
      }
			<TaskInfoForm data={{
        ...task, 
        sendApply,
        message,
        }} tags_info={tags_info}
        errorText={errorText}
        subjects_info={subjects_info}/>
		</div>
  )
}

export default TaskInformationP;