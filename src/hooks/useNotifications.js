import { useSelector } from 'react-redux';

export const useNotifications = () => {
	const { notifications } = useSelector(state => state.notifications);
	const New = useSelector(state => state.notifications).new;
	
	return {
		notifications,
    New,
	}
}