import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MyApplicationsSliceForm from '../../../forms/myapplicationsliceform/MyApplicationsSliceForm';

const MyApplications = () => {

  const applicationsSlice = [
    {
      title: "wrverv",
    },
    {
      title: "wrverv",
    },
    {
      title: "wrverv",
    }
  ];

  const data = {
    applicationsSlice
  }

  return (
    <div>
      <div className='main-container '>
        <Row>
          <Col>
          <MyApplicationsSliceForm data={data}/>
          </Col>
        </Row>
		  </div>
    </div>
  )
}

export default MyApplications;