import React from 'react'
import { Col, Row } from 'react-bootstrap';

const PersonalAriaP = () => {
  return (
    <div className='main-container'>
			<div md="auto" id="main_info" className='container-element shadow' style={{padding: "20px"}}>
        <div style={{width: "60%"}}>
          <div id='tasks list'>
            <h3 className='profile-text ml-10px'>My tasks</h3>
            <div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
              <div className='profile-descript-key' style={{display: "block"}}>Count of tasks: 20</div>
              <div className='profile-descript-key' style={{display: "inline-block", marginRight: "20px"}}>Nearest deadline: 12 jvbkb</div>
              <button style={{display: "inline-block", float: "right"}} className="to-button">go</button>
            </div>
          </div>
          <div className='mt-4'>
            <h3 className='profile-text ml-10px'>My applications</h3>
            <div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
              <div className='profile-descript-key' style={{display: "block"}}>Count of tasks:</div>
              <div className='profile-descript-key' style={{display: "inline-block"}}>Nearest deadline:</div>
              <button style={{display: "inline-block", float: "right"}} className="to-button">go</button>
            </div>
          </div>
          <div className='mt-4'>
            <h3 className='profile-text ml-10px'>TODO tasks</h3>
            <div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
              <div className='profile-descript-key' style={{display: "block"}}>Count of tasks: 20</div>
              <div className='profile-descript-key' style={{display: "inline-block", marginRight: "20px"}}>Nearest deadline: 12 jvbkb</div>
              <button style={{display: "inline-block", float: "right"}} className="to-button">go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalAriaP;