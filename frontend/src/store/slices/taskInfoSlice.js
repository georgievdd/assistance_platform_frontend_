import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	task: {}
}

const taskInfo = createSlice({
	name: "taskinfo",
	initialState,
	reducers: {
		putTaskInfo(state, action) {
			state.task = action.payload;
		},
	},
});

export const { putTaskInfo } = taskInfo.actions;

export default taskInfo.reducer;