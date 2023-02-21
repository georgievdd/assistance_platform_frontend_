import { useSelector } from 'react-redux';
import { write } from '../datafunc';

export const useApplications = () => {
	const { my } = useSelector(state => state.applications);
	return {
		my,
	}
}