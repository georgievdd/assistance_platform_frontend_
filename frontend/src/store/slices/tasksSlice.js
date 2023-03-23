import { createSlice } from '@reduxjs/toolkit';
import { LOAD_INIT } from '../../datafunc';

const initialState = {
	tasks: [],
	loadStatus: false,
	filters: {
		tags: [],
		subjects: [],
	},
	load: LOAD_INIT,
	task: {},
	taskForRedact: {},
}

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		getTasks(state, action) {
			// console.log("srv", action.payload.tasks);
			state.tasks = action.payload.tasks;
			state.loadStatus = true;
			//console.log("payload filters: ", action.payload);
			state.filters = action.payload.filters;
		},
		putTask(state, action) {
			state.task = action.payload;
		},
		putTaskForRedact(state, action) {
			state.taskForRedact = action.payload;
		},
		deleteTasks(state) {
			state.tasks = initialState.tasks;
			state.loadStatus = initialState.loadStatus;
		},
		setTasksLoad(state, action) {
			state.load = action.payload;
		},
	},
});

export const { getTasks, deleteTasks, putTask, putTaskForRedact, setTasksLoad } = tasksSlice.actions;

export default tasksSlice.reducer;