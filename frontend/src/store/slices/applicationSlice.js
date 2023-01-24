import { createSlice } from '@reduxjs/toolkit';

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
  my: []
}

const applications = createSlice({
	name: "applications",
	initialState,
	reducers: {
		putMyApplications(state, action) {
			state.my = action.payload;
		},
	},
});

export const { putMyApplications } = applications.actions;

export default applications.reducer;