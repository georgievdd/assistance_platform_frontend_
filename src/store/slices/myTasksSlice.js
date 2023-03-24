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
		setMyTasksLoad(state, action) {
			state.load = action.payload;
		},
		clearMyTasksSlice(state) {
			state.tasks = initialState.tasks;
			state.load = initialState.load;
			state.filters = initialState.filters;
		}
	},
});

export const { 
	setMyTasks, 
	clearMyTasksSlice, 
	setMyTasksLoad 
} = myTasksSlice.actions;

export default myTasksSlice.reducer;