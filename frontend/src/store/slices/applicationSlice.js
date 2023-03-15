import { createSlice } from '@reduxjs/toolkit';
import { write } from '../../datafunc';

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
  chooseApplicationsInformation: []
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
    }
	},
});

export const { putMyApplications, putChooseApplicationsInformation } = applications.actions;

export default applications.reducer;