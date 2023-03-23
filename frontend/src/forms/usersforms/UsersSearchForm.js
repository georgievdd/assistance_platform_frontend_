import React from 'react';
import { Row, Col } from 'react-bootstrap';
import loupe from '../../res/img/loupe.svg';

const UsersSearchForm = props => {

  const {
    value,
    onChange,
  } = props.data;

  return (
    <div className='container-element shadow' style={{height: "125px", marginBottom: "15px"}}>
      <Row>
        <Col xs><h4 className='tasks-search-header'>Пользователи</h4></Col>
      </Row>
      <div >
        <Row style={{width: "100%"}}>
          <Col style={{width: "100%", paddingLeft: "30px"}}><input
            id="search"
            placeholder='Введите имя пользователя'
            className='search-input'
            value={value}
            onChange={e => onChange(e)}
          /></Col>
          <Col md="auto"><img
            className='search-header-img'
            style={{marginRight: "auto", marginLeft: "auto"}}
            src={loupe}
          /></Col>
        </Row>
      </div>
    </div>
  )
}

export default UsersSearchForm;