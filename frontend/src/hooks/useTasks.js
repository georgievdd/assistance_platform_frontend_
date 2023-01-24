import { useSelector } from 'react-redux';

export const useTasks = () => {
	const { tasks, loadStatus, task } = useSelector(state => state.tasks);
	
	return {
		tasks,
    loadStatus,
		task,
	}
}