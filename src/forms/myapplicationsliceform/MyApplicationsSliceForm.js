import './myapplicationssliceform-style.css';
import ApplicationForm from '../applicationform/ApplicationForm';

const MyApplicationsSliceForm = props => {

  // console.log("MyApplicationsSliceForm", props);
  
  const {
    applications,
    applicationChooseHandler,
  } = props.data;

  const {task} = props;

  return (
    
    <div className='slicer-scroll'>
      {
        applications.map((application, index) => (
          <div style={{marginBottom: "10px"}} onClick={() => applicationChooseHandler(index)}>
            <div style={{padding: "3px"}}>
              <ApplicationForm data={application} task={task}/>
            </div>
          </div>
        ))
      }
    </div>

  )
}

export default MyApplicationsSliceForm;