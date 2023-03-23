import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MYTASKS } from "../../../components/routes/Routs";
import { contains, filterArrayByElement, getElById, getIdByEl, getOnlySecondInArray, getSumByName, sortArrayByFirstInArray } from "../../../datafunc";
import RedactMyTaskForm from "../../../forms/redactforms/RedactMyTaskForm";
import { useAuth } from "../../../hooks/useAuth";
import { useInformational_endpoint } from "../../../hooks/useInformational_endpoint";
import { useTasks } from "../../../hooks/useTasks";
import { deleteMyTask, redactMyTask } from "../../../store/slices/actionCreators";

const RedactMyTaskP = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const task = useTasks().taskForRedact;
  console.log("task", task);

  const {access} = useAuth();
  const { tags, 
    stage_of_study_choices, 
    subjects,
    stage_of_study_choices_info,
    subjects_info,
    tags_info,
  } = useInformational_endpoint();

  // console.log("page");

  // return <div></div>;

  //*новые начальные состояния; обращатся к кодам через них (желательно); 
  const stageOfStudyInfoList = sortArrayByFirstInArray(task.stage_of_study, stage_of_study_choices_info);
  const stageOfStudyList     = getOnlySecondInArray(stageOfStudyInfoList);
  const course_array         = filterArrayByElement(task.course_of_study, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const subjectsList         = filterArrayByElement(getElById(task.subject, subjects_info), subjects);

  const [titleState, setTitleState] = useState(task.title);                                    //x
  const [stageOfStudy, setStageOfStudy] = useState(stageOfStudyInfoList[0][0]);                //x
  const [courseOfStudy, setCourseOfStudy] = useState(course_array[0]);                         //x
  const [tagsState, setTagsState] = useState(tags.map(e => contains(e, task.tags)));           //x
  const [subjectState, setSubjectState] = useState(getIdByEl(subjectsList[0], subjects_info)); //x
  const [descriptionState, setDescriptionState] = useState(task.description);
  const [stop_accepting_applications_at, setStop_accepting_applications_at] = useState(
    new Date(task.stop_accepting_applications_at).toISOString().split('T')[0]
  );
  const [expires_at, setExpires_at] = useState(
    new Date(task.expires_at).toISOString().split('T')[0]
  );
  // const [file, setFile] = useState('');

  const tagsCheckHandler = index => {
		setTagsState(tagsState => tagsState.map((e, i) => (
			i === index ? !e : e
		)));
  }

  const titleHandler = e => {
    setTitleState(e.target.value);
  }
  const stageOfStudyHandler = e => {
    // console.log("stageOfStudyHandler: ", e.target.value, getSumByName(e.target.value, stageOfStudyInfoList));
		setStageOfStudy(getSumByName(e.target.value, stageOfStudyInfoList));
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
    setStop_accepting_applications_at(e.target.value);
  }
  const expires_atHandler = e => {
    setExpires_at(e.target.value);
  }
  // const fileHandler = e => {
  //   console.log(e.target.value);
  // }

  const redactTaskHandler = () => {

    let tagsIdArray = [];
		for (let i = 0; i < tags.length; ++i) {
			if (tagsState[i])
				tagsIdArray.push(getIdByEl(tags[i], tags_info));
		}

    const data = {
      title: titleState,
      stage_of_study: stageOfStudy,
      course_of_study: courseOfStudy,
      tags: tagsIdArray,
      subject: subjectState,
      description: descriptionState,
      stop_accepting_applications_at,
      expires_at: task.expires_at,
    }

    console.log("data", data);
    dispatch(redactMyTask(access, task.id, data));
    navigate(MYTASKS);
  }

  const deleteTask = () => {
    dispatch(deleteMyTask(access, task.id));
    navigate(MYTASKS);
  }

  const data = {
    titleState, titleHandler,
    tags, tagsState,
    stageOfStudyList,
    course_array,
    subjectsList,
    tagsCheckHandler,
    stageOfStudyHandler,
    courseOfStudyHandler,
    subjectsHandler,
    descriptionState, descriptionHandler,
    redactTaskHandler,
    stop_accepting_applications_at, dateHandler,
    expires_at, expires_atHandler,
    deleteTask,
    // fileHandler,
  };

  return (
    <div className="main-container">
      <div className="container-element shadow" style={{padding: "20px"}}>
        <RedactMyTaskForm data={data}/>
      </div>
    </div>
  )
}

export default RedactMyTaskP;