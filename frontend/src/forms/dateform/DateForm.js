import { parseTime } from "../../datafunc";

const DateForm = props => {

  const time = parseTime(props.data);

  return (
    <div>
      <p style={{marginBottom: "0", textAlign: "center"}}>{time.month + ' ' + time.day}</p>
      <p style={{marginBottom: "0", textAlign: "center"}}>{time.hour + ':' + time.minutes}</p>
    </div>
  )
}

export default DateForm;