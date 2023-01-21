import { Col, Row } from 'react-bootstrap';
import FormWithTasks from '../../../forms/tasksform/FormWithTasks';
import СategoriesForm from '../../../forms/categoriesform/СategoriesForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInformational_endpoint } from '../../../store/slices/actionCreators';
import { useTasks } from '../../../hooks/useTasks';
import { useInformational_endpoint } from '../../../hooks/useInformational_endpoint';
import { useState } from 'react';
import { setTasks } from '../../../store/slices/actionCreators';
import { getKeyByValue, getIdByEl, urlCreatePartOfPath, createTaskObject } from '../../../datafunc';

const TasksP = () => {

	const dispatch = useDispatch();

	const {subjects, tags, subjects_info, tags_info, sortsParams } = useInformational_endpoint();

	const tagCheckHandler = index => {
		console.log("tagsStateValue: ", tagsStateValue);

		setTagsStateValue(tagsStateValue => tagsStateValue.map((e, i) => (
			i === index ? !e : e
		)));
		console.log("tagsStateValue: ", tagsStateValue);
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
	const searchTitle = 'Tasks';
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
		tasks: useTasks().tasks.map(task => createTaskObject(task, tags_info, subjects_info)),
		searchValue, setSeacrhValue,
		searchHandler,
		searchTitle,
		taskMod: "taskInfo",
	}
	/// вставка в DOM
	useEffect(() => {
		dispatch(setInformational_endpoint());
	}, []);

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

		dispatch(setTasks(urlPath));

	}, [tagsStateValue, subjectsStateValue, grouping_type, sort_type, sortDirection]);

	/// search с фильтрами
	useEffect(() => {
		const urlPath = urlCreatePartOfPath("?", [
			["search_query", [].concat(searchValue)], 
		]);

		//console.log("urlPath:", urlPath);
		dispatch(setTasks(urlPath));

	}, [searchValue])

	return (
		<div className='main-container'>
			<Row>
				<Col md="auto" style={{width: "70%"}}>
					<FormWithTasks data={dataForTasks}/>
				</Col>
				<Col>
					<СategoriesForm data={dataForCategories}/>
				</Col>
			</Row>
		</div>
	)
}

export default TasksP;
