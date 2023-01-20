import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tasks: [],
	loadStatus: false,
	filters: {
		tags: [],
		subjects: [],
	}
}

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		getTasks(state, action) {
			//console.log(action.payload.tasks);
			state.tasks = action.payload.tasks;
			state.loadStatus = true;
			//console.log("payload filters: ", action.payload);
			state.filters = action.payload.filters;
		},
		deleteTasks(state) {
			state.tasks = initialState.tasks;
			state.loadStatus = initialState.loadStatus;
		},
	},
});

export const { getTasks, deleteTasks } = tasksSlice.actions;

export default tasksSlice.reducer;