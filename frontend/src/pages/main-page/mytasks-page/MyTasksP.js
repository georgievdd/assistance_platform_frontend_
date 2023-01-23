import './mytasks-page.css';
import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useUserData } from '../../../hooks/useUserData';
import { getMyTasks } from '../../../store/slices/actionCreators';
import { useMyTasks } from '../../../hooks/useMyTasks';
import FormWithTasks from '../../../forms/tasksform/FormWithTasks';
import CategoriesForm from '../../../forms/categoriesform/СategoriesForm';
import { useInformational_endpoint } from '../../../hooks/useInformational_endpoint';
import { getKeyByValue, getIdByEl, urlCreatePartOfPath, createTaskObject } from '../../../datafunc';
import addLogo from '../../../res/img/addLogo.png';
import { useNavigate } from 'react-router-dom';
import { NEWTASK } from '../../../components/routes/Routs';

const MyTasksP = () => {

  const dispatch = useDispatch();
	const navigate = useNavigate();
  const user = useUserData();
	const {subjects, tags, subjects_info, tags_info, sortsParams } = useInformational_endpoint();

	const tagCheckHandler = index => {
		setTagsStateValue(tagsStateValue => tagsStateValue.map((e, i) => (
			i === index ? !e : e
		)));
	}
	const grouping_typeHandler = value => {
		setGrouping_type(value)
	}
	const subjectsCheckHandler = index => {
		setSubjectsStateValue(subjectsStateValue.map((e, i) => (
			i === index ? !e : e
		)))
	}
	const sortsParamsCheckHandler = value => {
		setSort_type(getKeyByValue(value, sortsParams));
	}
	const sortDirectionHandler = () => {
		setSortDirection(sortDirection === '-' ? '' : '-');
 	}
	 const searchHandler = e => {
		setSeacrhValue(e.target.value);
	}

	const [searchValue, setSeacrhValue] = useState('');
	const [tagsStateValue, setTagsStateValue] = useState(useInformational_endpoint().tags.map(() => false));
	const [subjectsStateValue, setSubjectsStateValue] = useState(useInformational_endpoint().subjects.map(() => false));
	const [grouping_type, setGrouping_type] = useState("or");
	const [sort_type, setSort_type] = useState('');
	const [sortDirection, setSortDirection] = useState('');
  const searchTitle = 'My Tasks';
	const dataForCategories = {
		informational_endpoint: useInformational_endpoint(),
		sortDirection,
		tagCheckHandler,
		grouping_typeHandler,
		subjectsCheckHandler,
		sortsParamsCheckHandler,
		sortDirectionHandler,
	}
	const dataForTasks = {
		informational_endpoint: useInformational_endpoint(),
		tasks: useMyTasks().tasks.map(task => createTaskObject(task, tags_info, subjects_info)),
		searchValue, setSeacrhValue,
		searchHandler,
    searchTitle,
	}
	/// вставка в DOM
  useEffect(() => {
    dispatch(getMyTasks(user.id, ''));
  }, [])

	/// запрос с фильтрами 
	useEffect(() => {

		let subjectsIdArray = [];
		for (let i = 0; i < subjects.length; ++i) {
			if (subjectsStateValue[i])
				subjectsIdArray.push(getIdByEl(subjects[i], subjects_info));
		}

		let tagsIdArray = [];
		for (let i = 0; i < tags.length; ++i) {
			if (tagsStateValue[i])
				tagsIdArray.push(getIdByEl(tags[i], tags_info));
		}

		const urlPath = urlCreatePartOfPath("?", [
			["subjects", subjectsIdArray], 
			["tags", tagsIdArray], 
			["tags_grouping_type", [].concat(grouping_type)],
			["sort", [].concat(sortDirection + sort_type)]
		]);

		dispatch(getMyTasks(user.id, urlPath));

	}, [tagsStateValue, subjectsStateValue, grouping_type, sort_type, sortDirection]);

	/// search с фильтрами
	useEffect(() => {
		const urlPath = urlCreatePartOfPath("?", [
			["search_query", [].concat(searchValue)], 
		]);

		//console.log("urlPath:", urlPath);
		dispatch(getMyTasks(user.id, urlPath));

	}, [searchValue]);


	const addTask = () => {
		navigate(NEWTASK);
	}




  return (
    <div className='main-container'>
    <Row>
      <Col md="auto" style={{width: "70%"}}>
        <FormWithTasks data={dataForTasks}/>
      </Col>
      <Col>
				<div className='container-element shadow mb-3' style={{padding: "10px", height: "125px"}}>
					<h5 style={{marginBottom: "28px"}}>Создать публикацию</h5>
					<Button style={{width: "100%", height: "50px"}} variant="success" onClick={addTask}>
						Новое задание
					</Button>
				</div>
        <CategoriesForm data={dataForCategories}/>
      </Col>
    </Row>
  </div>
  )
}

export default MyTasksP;