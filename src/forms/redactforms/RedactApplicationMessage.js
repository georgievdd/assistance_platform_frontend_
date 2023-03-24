import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const RedactApplicationMessage = props => {

  return (
    <Modal
      show={props.show}
			onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Сообщение автору задания
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <FloatingLabel controlId="floatingTextarea2">
        <Form.Control
          as="textarea"
          value={props.value} 
          onChange={props.onChange}
          style={{ height: '200px' }}
        />
      </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.redact}>
          Изменить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RedactApplicationMessage;