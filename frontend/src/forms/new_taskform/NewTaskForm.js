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
        Here you can create your own task
      </div>
      <div style={{width: "80%", margin: "0 auto"}}>
        <FloatingLabel controlId="floatingInputGrid" label="Task title" className="mb-3">
          <Form.Control type="text" placeholder="description" onChange={e => titleHandler(e)}/>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Difficulty stage of study"
        >
          <Form.Select aria-label="Difficulty stage of study" className="mb-3" onChange={e => stageOfStudyHandler(e)}>
            {stage_of_study_choices.map(stage => <option>{stage}</option>)}
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Difficulty course of study"
        >
          <Form.Select aria-label="Difficulty course of study" className="mb-3" onChange={e => courseOfStudyHandler(e)}>
            {course_array.map(course => <option>{course}</option>)}
          </Form.Select>
        </FloatingLabel>
        <div className="FloatingLabel-My mb-3">
          <div className="new_task-tag-header">Tags</div>
          {tags.map((tag, index) => (
            <Form.Check 
              type="checkbox"
              label={tag}
              onChange={() => tagsCheckHandler(index)}
            />
          ))}
        </div>
        <Form className="mb-3">
          <FloatingLabel controlId="floatingSelectGrid" label="Subject">
            <Form.Select aria-label="Difficulty stage of study" onChange={e => subjectsHandler(e)}>
              {subjects.map(subject => <option>{subject}</option>)}
            </Form.Select>
            <Form.Label></Form.Label>
          </FloatingLabel>
          <Form.Label style={{color: "gray", marginLeft: "10px"}}>
            Its image depends on the choice of the subject!
          </Form.Label>
        </Form>
        <FloatingLabel controlId="floatingTextarea2" label="Description of task" className="mb-3">
          <Form.Control
            as="textarea"
            style={{ height: '100px' }}
            onChange={e => descriptionHandler(e)}
          />
        </FloatingLabel>
      <FloatingLabel controlId="floatingInputGrid" label="End of application acceptance" className="mb-3">
        <Form.Control type="date" placeholder="description" onChange={e => dateHandler(e)}/>
      </FloatingLabel>
      </div>
      <Button variant="success" style={{marginLeft: "41%"}} onClick={postTaskHandler}>
        <div className="new_task-button">Post a task</div>
      </Button>
    </div>
  )
}

export default NewTaskForm;