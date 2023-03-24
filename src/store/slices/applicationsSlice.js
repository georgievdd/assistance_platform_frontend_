import { createSlice } from '@reduxjs/toolkit';
import { LOAD_INIT, write } from '../../datafunc';

const initialState = {
	// my: {
  //   applicant: null,
  //   applicant_username: null,
  //   implementer_rating_normalized: null,
  //   message: null,
  //   task: null,
  //   status: null,
  //   created_at: null,
  //   updated_at: null
  // }
  my: [],
  chooseApplicationsInformation: [],
  load: LOAD_INIT,
}

const applications = createSlice({
	name: "applications",
	initialState,
	reducers: {
		putMyApplications(state, action) {
			state.my = action.payload;
      // write({applications: state.my})
		},
    putChooseApplicationsInformation(state, action) {
      state.chooseApplicationsInformation = action.payload;
    },
    setApplicationsLoad(state, action) {
			state.load = action.payload;
		},
    clearApplicationsSlice(state) {
      state.my = initialState.my;
      state.load = initialState.load;
      state.chooseApplicationsInformation = initialState.chooseApplicationsInformation;
    },
	},
});

export const { putMyApplications, putChooseApplicationsInformation, setApplicationsLoad, clearApplicationsSlice } = applications.actions;

export default applications.reducer;