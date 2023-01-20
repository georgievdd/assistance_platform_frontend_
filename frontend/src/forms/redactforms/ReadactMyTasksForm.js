import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const ReadactMyTasksForm = props => {
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
          title
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
				body
      </Modal.Body>
      <Modal.Footer>
        <Button>get to work</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ReadactMyTasksForm;