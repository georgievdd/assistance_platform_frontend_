import { createSlice } from '@reduxjs/toolkit';
import { LOAD_BEGIN, LOAD_INIT } from '../../datafunc';

const initialState = {
	tags_info: [],
  subjects_info: [],
  filters_info: {},
  profile_choices_info: {},
  load: LOAD_INIT,
}

const informational_endpoint = createSlice({
	name: "informational_endpoint",
	initialState,
	reducers: {
		setTags_info(state, action) {
			state.tags_info = action.payload;
		},
    setSubjects_info(state, action) {
			state.subjects_info = action.payload;
		},
    setFilters_info(state, action) {
      state.filters_info = action.payload;
    },
    setProfile_choices_info(state, action) {
      state.profile_choices_info = action.payload;
    },
		clearInformational_endpoint(state) {
			state.tags_info = initialState.tags_info;
      state.subjects_info = initialState.subjects_info;
      state.filters_info = initialState.filters_info;
      state.profile_choices_info = initialState.profile_choices_info;
      state.load = initialState.load;
		},
    setInformationalEndpointLoad(state, action) {
			state.load = action.payload;
		},
	},
});

export const { 
  clearInformational_endpoint,
  setProfile_choices_info,
  setFilters_info, 
  setSubjects_info,
  setTags_info,
  setInformationalEndpointLoad,
  } = informational_endpoint.actions;

export default informational_endpoint.reducer;