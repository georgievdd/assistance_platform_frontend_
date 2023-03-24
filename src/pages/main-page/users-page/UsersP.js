import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import UsersFieltersForm from '../../../forms/usersforms/UsersFieltersForm';
import UsersSliceForm from '../../../forms/usersforms/UsersSliceForm';
import { useAuth } from '../../../hooks/useAuth';
import { useUsers } from '../../../hooks/useUsers';
import { getUsers } from '../../../store/slices/actionCreators';
import { Row, Col } from 'react-bootstrap';
import UsersSearchForm from '../../../forms/usersforms/UsersSearchForm';
/*
email
first_name
id
last_name
username
*/

const fieltersArray = [
  "author",
  "implementer",
];

const UsersP = () => {

  const dispatch = useDispatch();
  const {access} = useAuth();
  const {users} = useUsers();

  const [search, setSearch] = useState('');
  const [fielters, setFielters] = useState(fieltersArray.map((e, i) => !i));
  
  const searchHandler = e => {
    setSearch(e.target.value);
  };

  const fieltersHandler = index => {
    setFielters(fielters.map((e, i) => (i === index ? !fielters[i] : fielters[i])));
  };

  useEffect(() => {
    console.log(fielters);
  }, [fielters])

  const searchData = {
    value: search,
    onChange: searchHandler,
  };

  const SliceData = {
    users,
  };

  const fieltersData = {
    fieltersArray,
    fielters,
    fieltersHandler,
  }


  //init
  useEffect(() => {
    dispatch(getUsers(access));
  }, []);



  
  return (
    <div className='main-container'>
      <Row>
        <Col md="auto" style={{width: "70%"}}>
          <UsersSearchForm data={searchData}/>
          <UsersSliceForm data={SliceData}/>
        </Col>
        <Col>
          <UsersFieltersForm data={fieltersData}/>
        </Col>
      </Row>
    </div>
  )
}

export default UsersP;