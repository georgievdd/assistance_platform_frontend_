import { useSelector } from 'react-redux';

export const useTODOtasks = () => {
	const { tasks } = useSelector(state => state.todotasks);
	
	return {
		tasks,
	}
}