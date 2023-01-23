import './myapplicationssliceform-style.css';
import ApplicationForm from '../applicationform/ApplicationForm';

const MyApplicationsSliceForm = props => {
  
    const {
      applicationsSlice,
    } = props.data;

  
  return (
    
    <div className='slicer-scroll'>
      {
        applicationsSlice.map(application => (
          <div style={{marginBottom: "10px"}}>
            <ApplicationForm data={application}/>
          </div>
        ))
      }
    </div>

  )
}

export default MyApplicationsSliceForm;