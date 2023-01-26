import { useState } from "react";
import { getIdByEl, getSumByName } from "../../../datafunc";
import NewTaskForm from "../../../forms/new_taskform/NewTaskForm";
import { useInformational_endpoint } from "../../../hooks/useInformational_endpoint";
import { useAuth } from '../../../hooks/useAuth';
import { alignPropType } from "react-bootstrap/esm/types";
import api from '../../../api/index';
import { useNavigate } from 'react-router-dom';
import {MYTASKS} from '../../../components/routes/Routs';
import axios from "axios";
import { HOST, VARIANT } from "../../../api/instance";
import EndPoints from "../../../api/endPoints";
import { postTask } from "../../../api/tasks";

const NewTaskP = () => {

  const {access} = useAuth();
  const navigate = useNavigate();
  const { tags, 
    stage_of_study_choices, 
    subjects,
    stage_of_study_choices_info,
    subjects_info,
    tags_info,
  } = useInformational_endpoint();
  const course_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [titleState, setTitleState] = useState("");
  const [tagsState, setTagsState] = useState(tags.map((e, i) => (i ? false : true)));
  const [stageOfStudy, setStageOfStudy] = useState(stage_of_study_choices_info[0][0]);
  const [courseOfStudy, setCourseOfStudy] = useState(1);
  const [subjectState, setSubjectState] = useState(getIdByEl(subjects[0], subjects_info));
  const [descriptionState, setDescriptionState] = useState("");
  const [dateState, setDateState] = useState("");
  const [file, setFile] = useState('');

  const tagsCheckHandler = index => {
		setTagsState(tagsState => tagsState.map((e, i) => (
			i === index ? !e : e
		)));
  }

  const titleHandler = e => {
    setTitleState(e.target.value);
  }

  const stageOfStudyHandler = e => {
    // console.log("stageOfStudyHandler: ", e.target.value, getSumByName(e.target.value, stage_of_study_choices_info));
		setStageOfStudy(getSumByName(e.target.value, stage_of_study_choices_info));
  }

  const courseOfStudyHandler = e => {
		setCourseOfStudy(e.target.value);
  }

  const subjectsHandler = e => {
    // console.log("subjectsHandler: ", e.target.value, getIdByEl(e.target.value, subjects_info));
    setSubjectState(getIdByEl(e.target.value, subjects_info));
  }

  const descriptionHandler = e => {
    setDescriptionState(e.target.value);
  }

  const dateHandler = e => {
    console.log(e.target.value);
    setDateState(e.target.value);
  }

  const fileHandler = e => {
    console.log(e.target.value);
  }

  const postTaskHandler = () => {

    let tagsIdArray = [];
		for (let i = 0; i < tags.length; ++i) {
			if (tagsState[i])
				tagsIdArray.push(getIdByEl(tags[i], tags_info));
		}

    const data = {
      title: titleState,
      difficulty_stage_of_study: stageOfStudy,
      difficulty_course_of_study: courseOfStudy,
      tags: tagsIdArray,
      subject: subjectState,
      description: descriptionState,
      stop_accepting_applications_at: dateState,
    }
    console.log(subjectState);
    postTask(access, data);
    navigate(MYTASKS);
  }

  const newTaskData = {
    tags,
    stage_of_study_choices,
    course_array,
    subjects,
    tagsCheckHandler,
    stageOfStudyHandler,
    courseOfStudyHandler,
    subjectsHandler,
    descriptionHandler,
    dateHandler,
    postTaskHandler,
    titleHandler,
    fileHandler,
  };

  return (
    <div className="main-container">
      <div className="container-element shadow" style={{padding: "20px"}}>
        <NewTaskForm data={newTaskData}/>
      </div>
    </div>
  )
}

export default NewTaskP;