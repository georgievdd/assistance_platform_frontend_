import './applicationform-style.css';

const ApplicationForm = props => {

  const {
    title,
  } = props.data;

  return (
    <div className="container-element application-container">
      {title}
    </div>
  )
}

export default ApplicationForm;