import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MyApplicationsSliceForm from '../../../forms/myapplicationsliceform/MyApplicationsSliceForm';

const MyApplications = () => {

  let applicationsSlice = [];
  for (let i = 0; i < 100; ++i) {
    applicationsSlice.push({
      title: "title",
    })
  }

  const data = {
    applicationsSlice
  }

  return (
    <div>
      <div className='main-container' style={{marginTop: "120px"}}>
        <MyApplicationsSliceForm data={data}/>
		  </div>
    </div>
  )
}

export default MyApplications;