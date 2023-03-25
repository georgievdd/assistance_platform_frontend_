import './toregister-page-style.css';
import RegistrationForm from '../../../forms/registrationform/RegistrationForm';
import useInput from '../../../hooks/useInput';
import useCheckBox from '../../../hooks/useCheckBox';
import { useDispatch } from 'react-redux';
import { registrationUser } from '../../../store/slices/actionCreators';
import { useNavigate } from 'react-router-dom';
import { TASKS } from '../../../components/routes/Routs';

const ToRegisterP = () => {

	const email          = useInput('', {isEmail: '', isEmpty: ''});
	const username       = useInput('', {maxLength: 10, minLength: 5, isEmpty: ''});
	const password       = useInput('', {minLength: 8, isEmpty: ''});
	const repeatPassword = useInput('', {compare: password.value, isEmpty: ''});
	const checkbox       = useCheckBox(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isFormValid = () => {
		return !email.noValid && !username.noValid && !password.noValid && !repeatPassword.noValid && !checkbox.noValid;
	}



	const register = () => {
		if (isFormValid()) {
			dispatch(registrationUser({
				email: email.value,
				username: username.value,
				password: password.value,
			}));
			navigate(TASKS);
		} else {
			email.setOnBlurForced();
			username.setOnBlurForced();
			password.setOnBlurForced();
			repeatPassword.setOnBlurForced();
			checkbox.checkValidForced();
		}
	}	

	const data = {
		email,
		username,
		password,
		repeatPassword,
		checkbox,
		register,
	}

	return (
		<div className='toregister-background pt-5'>
			<RegistrationForm data={data}/>
		</div>
	)
}

export default ToRegisterP;