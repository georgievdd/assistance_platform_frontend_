import { Form, FloatingLabel, Button } from "react-bootstrap";
import './newtaskform-style.css';

const NewTaskForm = props => {

  const {
    tags,
    stage_of_study_choices,
    course_array,
    subjects,
    titleHandler,
    tagsCheckHandler,
    stageOfStudyHandler,
    courseOfStudyHandler,
    subjectsHandler,
    descriptionHandler,
    dateHandler,
    postTaskHandler,
  } = props.data;

  return (
    <div>
      <div className="newtask-header mb-4">
        Создание задания
      </div>
      <div style={{width: "80%", margin: "0 auto"}}>
        <FloatingLabel controlId="floatingInputGrid" label="Заголовок" className="mb-3">
          <Form.Control type="text" placeholder="description" onChange={e => titleHandler(e)}/>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Этап обучения"
        >
          <Form.Select aria-label="Стадия сложности обучения" className="mb-3" onChange={e => stageOfStudyHandler(e)}>
            {stage_of_study_choices.map(stage => <option>{stage}</option>)}
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Курс/класс обучения"
        >
          <Form.Select aria-label="Difficulty course of study" className="mb-3" onChange={e => courseOfStudyHandler(e)}>
            {course_array.map(course => <option>{course}</option>)}
          </Form.Select>
        </FloatingLabel>
        <div className="FloatingLabel-My mb-3">
          <div className="new_task-tag-header">Типы задач</div>
          {tags.map((tag, index) => (
            <Form.Check 
              type="checkbox"
              label={tag}
              onChange={() => tagsCheckHandler(index)}
            />
          ))}
        </div>
        <Form className="mb-3">
          <FloatingLabel controlId="floatingSelectGrid" label="Предмет">
            <Form.Select aria-label="Difficulty stage of study" onChange={e => subjectsHandler(e)}>
              {subjects.map(subject => <option>{subject}</option>)}
            </Form.Select>
            <Form.Label></Form.Label>
          </FloatingLabel>
          {/* <Form.Label style={{color: "gray", marginLeft: "10px"}}>
            Иконка задания зависит от выбора предмета!
          </Form.Label> */}
        </Form>
        <FloatingLabel controlId="floatingTextarea2" label="Описание" className="mb-3">
          <Form.Control
            as="textarea"
            style={{ height: '100px' }}
            onChange={e => descriptionHandler(e)}
          />
        </FloatingLabel>
      <FloatingLabel controlId="floatingInputGrid" label="Окончание приема заявок" className="mb-3">
        <Form.Control type="date" placeholder="description" onChange={e => dateHandler(e)}/>
      </FloatingLabel>
      </div>
      <Button variant="success" style={{marginLeft: "40%"}} onClick={postTaskHandler}>
        <div className="new_task-button">Разместить задание</div>
      </Button>
    </div>
  )
}

export default NewTaskForm;