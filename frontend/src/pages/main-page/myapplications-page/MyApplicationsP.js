import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import MyApplicationsSliceForm from '../../../forms/myapplicationsliceform/MyApplicationsSliceForm';
import { setMyApplications, setTask } from '../../../store/slices/actionCreators';
import { useUserData } from '../../../hooks/useUserData';
import { useAuth } from '../../../hooks/useAuth';
import { useApplications } from '../../../hooks/useApplications';
import { useDispatch } from 'react-redux';
import RedactMyApplicationsForm from '../../../forms/redactforms/RedactMyApplicationsForm';
import {useTasks} from '../../../hooks/useTasks';

const MyApplicationsP = () => { 

  const user = useUserData();
  const {access} = useAuth();
  const dispatch = useDispatch();
  const applications = useApplications().my;

  const [chooseApplicationState, setChooseApplicationState] = useState(applications.map(() => false));
  const [chooseApplication, setChooseApplication] = useState(null);
  const {task} = useTasks();
  console.log(task);

  const applicationChooseHandler = index => {
    console.log(index);
    const newApplicationsState = chooseApplicationState.map(
      (e, i) => {
        if (i === index) {
          setChooseApplication(applications[i]);
          dispatch(setTask(applications[i].task));
          return true;
        }
        return false;
      }
    )
    setChooseApplicationState(newApplicationsState);
  }

  const data = {
    applications,
    chooseApplication,
    setChooseApplication,
    applicationChooseHandler,
  }

  useEffect(() => {
    dispatch(setMyApplications(user.id, access))
  }, []);

  return (
    <div>
      <div className='main-container' style={{marginTop: "70px"}}>
        <div style={{marginBottom: "20px", color: "white", paddingLeft: "30px"}}>
          <h2>Мои заявки</h2>
        </div>
        <Row>
          <Col md="auto" style={{width: "40%"}}>
            <MyApplicationsSliceForm data={data} task={task}/>
          </Col>
          <Col>
            <RedactMyApplicationsForm data={chooseApplication} task={task}/>
          </Col>
        </Row>
		  </div>
    </div>
  )
}

export default MyApplicationsP;