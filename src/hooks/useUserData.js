import { useSelector } from 'react-redux';

export const useUserData = () => {
	const { id,
          username,
          profile,
          contacts,
          statistics,
        } = useSelector(state => state.user);
  
  if (profile) {
    return {
      id,
      username,
      ...profile,
      ...contacts,
      ...statistics.ratings,
      ...statistics.tasks,
    }
  }

  return {}
}