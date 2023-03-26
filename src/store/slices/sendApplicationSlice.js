import { createSlice } from '@reduxjs/toolkit';
import { LOAD_INIT } from '../../datafunc';

const initialState = {
	load: LOAD_INIT,
}

const sendApplicationSlice = createSlice({
	name: "sendapplication",
	initialState,
	reducers: {
    setSendApplicationLoad(state, action) {
			state.load = action.payload;
		},
    clearSendApplicationSlice(state) {
      state.error = initialState.error;
      state.load = initialState.load;
    },
	},
});

export const { setSendApplicationLoad, clearApplicationsSlice } = sendApplicationSlice.actions;

export default sendApplicationSlice.reducer;