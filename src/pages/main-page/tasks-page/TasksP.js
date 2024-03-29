import { Col, Row, Button } from 'react-bootstrap';
import FormWithTasks from '../../../forms/tasksform/FormWithTasks';
import СategoriesForm from '../../../forms/categoriesform/СategoriesForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInformational_endpoint, setTasksAuth } from '../../../store/slices/actionCreators';
import { useTasks } from '../../../hooks/useTasks';
import { useInformational_endpoint } from '../../../hooks/useInformational_endpoint';
import { useState } from 'react';
import { setTasks } from '../../../store/slices/actionCreators';
import { getKeyByValue, getIdByEl, urlCreatePartOfPath, createTaskObject } from '../../../datafunc';
import { useNavigate } from 'react-router-dom';
import { LOGIN, NEWTASK } from '../../../components/routes/Routs';
import { useAuth } from '../../../hooks/useAuth';

const TasksP = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {access, isAuth} = useAuth();

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
	const searchTitle = 'Все задания';
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
		tasks: useTasks().tasks.map(task => createTaskObject(task, tags_info, subjects_info)),
		searchValue, setSeacrhValue,
		searchHandler,
		searchTitle,
		taskMod: "taskInfo",
		taskModFunctions: {},
		subjects_info,
	}
	/// вставка в DOM
	useEffect(() => {
		if (isAuth) dispatch(setTasksAuth(access));
		else dispatch(setTasks());
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
		if (isAuth) dispatch(setTasksAuth(access, urlPath));
		else dispatch(setTasks(urlPath));

	}, [tagsStateValue, subjectsStateValue, grouping_type, sort_type, sortDirection]);

	/// search с фильтрами
	useEffect(() => {
		const urlPath = urlCreatePartOfPath("?", [
			["search_query", [].concat(searchValue)], 
		]);

		//console.log("urlPath:", urlPath);
		if (isAuth) dispatch(setTasksAuth(access, urlPath));
		else dispatch(setTasks(urlPath));

	}, [searchValue])


	const addTask = () => {
		if (isAuth) navigate(NEWTASK);
		else {
			navigate(LOGIN);
      alert("Need to log in!");
      return;
		}
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
					<СategoriesForm data={dataForCategories}/>
				</Col>
			</Row>
		</div>
	)
}

export default TasksP;
