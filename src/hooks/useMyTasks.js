import { useSelector } from 'react-redux';

export const useMyTasks = () => {
	const { tasks } = useSelector(state => state.mytasks);
	return {
		tasks,
	}
}