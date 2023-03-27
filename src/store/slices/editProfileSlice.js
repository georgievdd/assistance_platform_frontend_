import { createSlice } from '@reduxjs/toolkit';
import { LOAD_INIT } from '../../datafunc';

const initialState = {
	load: LOAD_INIT,
}

const editProfileSlice = createSlice({
	name: "editprofile",
	initialState,
	reducers: {
    setEditProfileLoad(state, action) {
			state.load = action.payload;
		},
    clearEditProfileSlice(state) {
      state.error = initialState.error;
      state.load = initialState.load;
    },
	},
});

export const { setEditProfileLoad, clearEditProfileSlice } = editProfileSlice.actions;

export default editProfileSlice.reducer;