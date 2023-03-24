import { useSelector } from 'react-redux';

export const useTasks = () => {
	const { tasks, loadStatus, task, taskForRedact } = useSelector(state => state.tasks);
	
	return {
		tasks,
    loadStatus,
		task,
		taskForRedact,
	}
}