import { useSelector } from 'react-redux';

export const useUserData = () => {
	const { id,
          username,
          email,
          profile,
          contacts,
          statistics,
        } = useSelector(state => state.user);

  const {
    first_name,
    last_name,
    profile_image,
    biography,
    stage_of_study,
    course_of_study,
  } = profile;

  const {
    phone,
    telegram,
    vk,
  } = contacts;

  // console.log(statistics);

  const {
    author, 
    implementer,
  } = statistics.ratings;
  const {
    authored,
    implementered,
    applications,
  } = statistics.tasks;
	
	return {
		id,
    username,
    email,
    first_name,
    last_name,
    profile_image,
    biography,
    stage_of_study,
    course_of_study,

    phone,
    telegram,
    vk,

    author,
    implementer,
    authored,
    implementered,
    applications,
	}
}