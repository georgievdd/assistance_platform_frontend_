import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tags_info: [],
  subjects_info: [],
  filters_info: {},
  profile_choices_info: {},
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
			state.tasks = initialState.tasks;
			state.loadStatus = initialState.loadStatus;
		},
	},
});

export const { 
  clearInformational_endpoint,
  setProfile_choices_info,
  setFilters_info, 
  setSubjects_info,
  setTags_info,
  } = informational_endpoint.actions;

export default informational_endpoint.reducer;