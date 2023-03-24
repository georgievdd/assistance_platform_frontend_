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
			state.tasks = action.payload.tasks;
			state.loadStatus = true;
			state.filters = action.payload.filters;
		},
		putTask(state, action) {
			state.task = action.payload;
		},
		putTaskForRedact(state, action) {
			state.taskForRedact = action.payload;
		},
		setTasksLoad(state, action) {
			state.load = action.payload;
		},
		clearTasksSlice(state) {
			state.tasks = initialState.tasks;
			state.loadStatus = initialState.loadStatus;
			state.filters = initialState.filters;
			state.load = initialState.load;
			state.task = initialState.task;
			state.taskForRedact = initialState.taskForRedact;
		}
	},
});

export const { 
	getTasks, 
	clearTasksSlice, 
	putTask, 
	putTaskForRedact, 
	setTasksLoad 
} = tasksSlice.actions;

export default tasksSlice.reducer;