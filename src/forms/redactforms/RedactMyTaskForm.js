import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import deleteImg from '../../res/img/delete.png';

const RedactMyTaskForm = props => {

  const {
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
    fileHandler,
    deleteTask,
  } = props.data;

  return (
    <div>
      <div className="newtask-header mb-4">
        Редактирование задания
      </div>
      <div style={{width: "80%", margin: "0 auto"}}>

        <FloatingLabel controlId="floatingInputGrid" label="Заголовок" className="mb-3">
          <Form.Control 
          value={titleState}
          type="text" 
          placeholder="description" 
          onChange={e => titleHandler(e)}/>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Этап обучения"
        >
          <Form.Select 
          aria-label="Стадия сложности обучения" 
          className="mb-3"
          onChange={e => stageOfStudyHandler(e)}>
            {stageOfStudyList.map(stage => <option>{stage}</option>)}
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Курс/класс обучения"
        >
          <Form.Select
           aria-label="Difficulty course of study" 
           className="mb-3" 
           onChange={e => courseOfStudyHandler(e)}>
            {course_array.map(course => <option>{course}</option>)}
          </Form.Select>
        </FloatingLabel>
        <div className="FloatingLabel-My mb-3">
          <div className="new_task-tag-header">Типы задач</div>
          {tags.map((tag, index) => (
            <Form.Check 
              type="checkbox"
              checked={tagsState[index]}
              label={tag}
              onChange={() => tagsCheckHandler(index)}
            />
          ))}
        </div>
        <Form className="mb-3">
          <FloatingLabel controlId="floatingSelectGrid" label="Предмет">
            <Form.Select aria-label="Difficulty stage of study" onChange={e => subjectsHandler(e)}>
              {subjectsList.map(subject => <option>{subject}</option>)}
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
            value={descriptionState}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Окончание приема заявок" className="mb-3">
          <Form.Control 
            type="date"
            onChange={e => dateHandler(e)}
            value={stop_accepting_applications_at}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Истекает" className="mb-3">
          <Form.Control 
            type="date"
            onChange={e => expires_atHandler(e)}
            value={expires_at}/>
        </FloatingLabel>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Прикрепленные файлы</Form.Label>
          <div>иконки с файлами, при наведении заменяются на иконки файла с крестиком</div>
        </Form.Group>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Добавить</Form.Label>
          <Form.Control type="file" size="lg" onChange={e => fileHandler(e)}/>
        </Form.Group>
        {/* <FloatingLabel controlId="floatingInputGrid" label="Окончание приема заявок" className="mb-3">
          <Form.Control type="date" placeholder="description" onChange={e => dateHandler(e)}/>
        </FloatingLabel> */}
      </div>
      <Row>
        <Col md="auto" style={{marginLeft: "40%"}}>
          <Button variant="success" onClick={() => redactTaskHandler()}>
            <div className="new_task-button">Сохранить изменения</div>
          </Button>
        </Col>
        <Col>
          <img
            src={deleteImg}
            style={{marginLeft: "80%"}}
            className='defaultScale'
            width="60px"
            onClick={() => deleteTask()}
          />
        </Col>
      </Row>
    </div>
  )
}

export default RedactMyTaskForm;