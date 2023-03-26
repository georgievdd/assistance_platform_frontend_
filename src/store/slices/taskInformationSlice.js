import { createSlice } from '@reduxjs/toolkit';
import { LOAD_INIT } from '../../datafunc';

const initialState = {
	task: {},
  load: LOAD_INIT,
}

const taskInformationalSlice = createSlice({
	name: "taskinfo",
	initialState,
	reducers: {
    putTasInfo(state, action) {
      state.task = action.payload;
    },
		setTaskInfoLoad(state, action) {
			state.load = action.payload;
		},
		clearTaskInfoSlice(state) {
			state.task = initialState.task;
			state.load = initialState.load;
		}
	},
});

export const { 
	putTasInfo,
	setTaskInfoLoad,
	clearTaskInfoSlice,
} = taskInformationalSlice.actions;

export default taskInformationalSlice.reducer;