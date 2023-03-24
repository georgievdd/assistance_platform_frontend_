import { useSelector } from 'react-redux';

export const useInformational_endpoint = () => {
	const { tags_info,
    subjects_info,
    filters_info,
    profile_choices_info, 
  } = useSelector(state => state.informational_endpoint);
	
	return {
    tags: tags_info !== [] ? tags_info.map(i => i.name) : [],
		tags_info: tags_info,
    subjects: subjects_info !== [] ? subjects_info.map(i => i.name) : [],
    subjects_info,
    filters_info,
    profile_choices_info,
    stage_of_study_choices_info: profile_choices_info.stage_of_study_choices,
    stage_of_study_choices: Object.keys(profile_choices_info).length !== 0 ? 
    profile_choices_info.stage_of_study_choices.map(i => i[1]) : [],
    sortsParams: filters_info ? (Object.keys(filters_info).length === 0 ? [] :
    filters_info.sort) : [],
	}
}