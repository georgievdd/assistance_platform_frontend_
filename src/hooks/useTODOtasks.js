import { useSelector } from 'react-redux';

export const useTODOtasks = () => {
	const { tasks, filters } = useSelector(state => state.todotasks);
	return {
		tasks,
		filters,
	}
}