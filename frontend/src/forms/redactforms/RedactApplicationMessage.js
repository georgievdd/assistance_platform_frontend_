import { Button, Form, Modal } from "react-bootstrap";

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
        <Form.Control value={props.value} onChange={props.onChange}>
        </Form.Control>
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