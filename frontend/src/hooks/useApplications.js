import { useSelector } from 'react-redux';

export const useApplications = () => {
	const { my } = useSelector(state => state.applications);
	
	return {
		my,
	}
}