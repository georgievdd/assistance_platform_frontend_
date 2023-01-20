import { useSelector } from 'react-redux';

export const useTasks = () => {
	const { tasks, loadStatus } = useSelector(state => state.tasks);
	
	return {
		tasks,
    loadStatus,
	}
}