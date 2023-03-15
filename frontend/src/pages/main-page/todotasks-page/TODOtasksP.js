import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useUserData } from '../../../hooks/useUserData';
import { getMyTasks, getTODOtasks } from '../../../store/slices/actionCreators';
import { useTODOtasks } from '../../../hooks/useTODOtasks';
import FormWithTasks from '../../../forms/tasksform/FormWithTasks';
import CategoriesForm from '../../../forms/categoriesform/СategoriesForm';
import { useInformational_endpoint } from '../../../hooks/useInformational_endpoint';
import { getKeyByValue, getIdByEl, urlCreatePartOfPath, createTaskObject } from '../../../datafunc';


const TODOtasksP = () => {

  const dispatch = useDispatch();
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
		setSortTitle(value);
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
	const [sortTitle, setSortTitle] = useState('');
	const [sortDirection, setSortDirection] = useState('');
  const searchTitle = 'My TODO Tasks';
	const dataForCategories = {
		informational_endpoint: useInformational_endpoint(),
		sortDirection,
		tagCheckHandler,
		grouping_typeHandler,
		subjectsCheckHandler,
		sortsParamsCheckHandler,
		sortDirectionHandler,
		sortTitle,
	}
	const dataForTasks = {
		informational_endpoint: useInformational_endpoint(),
		tasks: useTODOtasks().tasks.map(task => createTaskObject(task, tags_info, subjects_info)),
		searchValue, setSeacrhValue,
		searchHandler,
    searchTitle,
		taskMod: [],
		taskModFunctions: {},
	}
	/// вставка в DOM
  useEffect(() => {
    dispatch(getTODOtasks(user.id, ''));
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

		dispatch(getTODOtasks(user.id, urlPath));

	}, [tagsStateValue, subjectsStateValue, grouping_type, sort_type, sortDirection]);

	/// search с фильтрами
	useEffect(() => {
		const urlPath = urlCreatePartOfPath("?", [
			["search_query", [].concat(searchValue)], 
		]);

		//console.log("urlPath:", urlPath);
		dispatch(getTODOtasks(user.id, urlPath));

	}, [searchValue])

  return (
    <div className='main-container'>
    <Row>
      <Col md="auto" style={{width: "70%"}}>
        <FormWithTasks data={dataForTasks}/>
      </Col>
      <Col>
        <CategoriesForm data={dataForCategories}/>
      </Col>
    </Row>
  </div>
  )
}

export default TODOtasksP;