import { useSelector } from 'react-redux';

export const useTaskInfo = () => {

  const { task } = useSelector(state => state.taskinfo);

  const {
    created_at,
    description,
    id,
    imgType,
    price,
    subject,
    tags,
    title,
  } = task;

	return {
    created_at,
    description,
    id,
    imgType,
    price,
    subject,
    tags,
    title,
	}
}