import './comein-style.css';
import LoginForm from '../../../forms/loginform/LoginForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
import { useAuth } from '../../../hooks/useAuth';
import { getUserData, loginUser } from '../../../store/slices/actionCreators';



const LoginP = () => {

	const email = useInput("");
	const password = useInput("");

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {access} = useAuth();

	const handler = () => {
		dispatch(loginUser({ username: email.value, password: password.value }));
		setTimeout(() => {
			dispatch(getUserData(email.value))
		}, 900);
		// dispatch(getUserData(email.value));
		navigate('/tasks');
	}

	const data = {
		email,
		password,
		handler,
	}

	return (
		<div className='comein-background pt-5'>
			<LoginForm data={data}/>
		</div>
	)
}

export default LoginP;
