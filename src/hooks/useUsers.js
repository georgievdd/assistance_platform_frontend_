import { useSelector } from 'react-redux';

export const useUsers = () => {
	const { users } = useSelector(state => state.users);
	
	return {
		users,
	}
}