

const ValidErrorForm = props => {
	if (props.errorText) return (
		<div>
			<p style={{ color: "red", marginTop: "0px", marginBottom: "0px" }}>{props.errorText}</p>
		</div>
	);
	else return false;
}

export default ValidErrorForm
