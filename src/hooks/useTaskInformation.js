import { useSelector } from 'react-redux';

export const useTaskInformation = () => {
	const { task } = useSelector(state => state.taskinfo);
	
	return {
		task,
	}
}