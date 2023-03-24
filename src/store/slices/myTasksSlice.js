import { createSlice } from '@reduxjs/toolkit';
import { LOAD_INIT } from '../../datafunc';

const initialState = {
	tasks: [],
	filters: {
		tags: [],
		subjects: [],
	},
	load: LOAD_INIT,
}

const myTasksSlice = createSlice({
	name: "mytasks",
	initialState,
	reducers: {
		setMyTasks(state, action) {
			console.log("action.payload", action.payload);
			state.tasks = action.payload.tasks;
			state.filters = action.payload.filters;
		},
		deleteMyTasks(state) {
			state.tasks = initialState.tasks;
			state.filters = initialState.filters;
		},
		setMyTasksLoad(state, action) {
			state.load = action.payload;
		},
	},
});

export const { setMyTasks, deleteMyTasks, setMyTasksLoad } = myTasksSlice.actions;

export default myTasksSlice.reducer;