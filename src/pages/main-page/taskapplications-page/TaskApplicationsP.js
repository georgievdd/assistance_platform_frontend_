import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import EmptyForm from "../../../forms/emptyform/EmptyForm";
import MyApplicationsSliceForm from "../../../forms/myapplicationsliceform/MyApplicationsSliceForm";
import RedactMyApplicationsForm from "../../../forms/redactforms/RedactMyApplicationsForm";
import TaskApplicationsForm from "../../../forms/taskapplicationsform/TaskApplicationsForm";
import { useApplications } from "../../../hooks/useApplications";


const TaskApplicationsP = () => {

  //! do
  const applications = useApplications().chooseApplicationsInformation;
  if (applications.length === 0) 
    return <EmptyForm id = {3} style={{marginTop: "300px"}}></EmptyForm>
  return (
    <div>
      <div className='main-container container-element-gray' style={{
        marginTop: "70px",
        minHeight: "700px",
        width: "1400px",
        padding: "50px",
        }}>
        <TaskApplicationsForm data={applications} />
		  </div>
    </div>
  )
}

export default TaskApplicationsP;