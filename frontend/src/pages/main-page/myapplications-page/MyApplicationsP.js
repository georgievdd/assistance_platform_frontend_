import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import MyApplicationsSliceForm from '../../../forms/myapplicationsliceform/MyApplicationsSliceForm';
import { deleteMyApplication, setMyApplications, setTask } from '../../../store/slices/actionCreators';
import { useUserData } from '../../../hooks/useUserData';
import { useAuth } from '../../../hooks/useAuth';
import { useApplications } from '../../../hooks/useApplications';
import { useDispatch } from 'react-redux';
import RedactMyApplicationsForm from '../../../forms/redactforms/RedactMyApplicationsForm';
import {useTasks} from '../../../hooks/useTasks';
import { write } from '../../../datafunc';
import EmptyForm from '../../../forms/emptyform/EmptyForm';
import { redactMyApplication } from '../../../store/slices/actionCreators';

const MyApplicationsP = () => { 

  const user = useUserData();
  const {access} = useAuth();
  const dispatch = useDispatch();
  const applications = useApplications().my;

  const [chooseApplicationState, setChooseApplicationState] = useState(applications.map(() => false));
  const [chooseApplication, setChooseApplication] = useState(null);
  const {task} = useTasks();

  const [redactMsg, setRedactMsg] = useState('');
  const onChangeSetRedact = e => {
    setRedactMsg(e.target.value);
  }

  const applicationChooseHandler = index => {
    write({index});
    const newApplicationsState = chooseApplicationState.map(
      (e, i) => {
        if (i === index) {
          setChooseApplication(applications[i]);
          return true;
        }
        return false;
      }
    )
    // console.log(newApplicationsState);
  }

  const redactApplicationMessage = () => {
    const taskId = chooseApplication.task.id;
    console.log(taskId);
    dispatch(redactMyApplication(taskId, access, redactMsg));
    window.location.reload();
  }

  const deleteApplication = () => {
    const taskId = chooseApplication.task.id;
    dispatch(deleteMyApplication(taskId, access));
    window.location.reload();
  }

  const data = {
    applications,
    chooseApplication,
    setChooseApplication,
    applicationChooseHandler,
  }
  const redactData = {
    application: chooseApplication,
    redactMsg,
    onChangeSetRedact,
    redactApplicationMessage,
    deleteApplication,
  }

  useEffect(() => {
    dispatch(setMyApplications(user.id, access))
  }, []);

  useEffect(() => {
    setRedactMsg(chooseApplication != null ? chooseApplication.message : "");
  }, [chooseApplication]);

  if (applications.length === 0) 
    return <EmptyForm id = {0} style={{marginTop: "300px"}}></EmptyForm>
  return (
    <div>
      <div className='main-container' style={{marginTop: "70px"}}>
        <div style={{marginBottom: "20px", color: "white", paddingLeft: "30px"}}>
          <h2>Мои заявки ({applications.length})</h2>
        </div>
        <Row>
          <Col md="auto" style={{width: "40%"}}>
            <MyApplicationsSliceForm data={data} task={task}/>
          </Col>
          <Col>
            <RedactMyApplicationsForm data={redactData} task={task}/>
          </Col>
        </Row>
		  </div>
    </div>
  )
}

export default MyApplicationsP;