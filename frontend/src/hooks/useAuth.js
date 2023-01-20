import { useSelector } from 'react-redux';

export const useAuth = () => {
	const { access, refresh, userneme } = useSelector(state => state.user);
	
	return {
		isAuth: !!access,
		access,
		refresh,
	}
}