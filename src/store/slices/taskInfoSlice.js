import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	task: {},
}

const taskInfo = createSlice({
	name: "taskinfo",
	initialState,
	reducers: {
		putTaskInfo(state, action) {
			state.task = action.payload;
		},
		clearTaskInfoSlice(state) {
			state.task = initialState.task;
		}
	},
});

export const { 
	putTaskInfo, 
	clearTaskInfoSlice
 } = taskInfo.actions;

export default taskInfo.reducer;