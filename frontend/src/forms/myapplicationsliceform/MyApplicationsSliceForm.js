import './myapplicationssliceform-style.css';

const MyApplicationsSliceForm = props => {
  
    const {
      applicationsSlice,
    } = props.data;

  
  return (
    
    <div className='slicer-scroll'>
      {
        applicationsSlice.map(application => (
          <div>{application.title}</div>
        ))
      }
    </div>

  )
}

export default MyApplicationsSliceForm;