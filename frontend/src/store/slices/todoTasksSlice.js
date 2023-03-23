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

const todoTasksSlice = createSlice({
	name: "todotasks",
	initialState,
	reducers: {
		setTODOtasks(state, action) {
			state.tasks = action.payload.tasks;
			state.filters = action.payload.filters;
		},
		deleteTODOtasks(state) {
			state.tasks = initialState.tasks;
			state.filters = initialState.filters;
		},
		setTodoTasksLoad(state, action) {
			state.load = action.payload;
		},
	},
});

export const { setTODOtasks, deleteTODOtasks, setTodoTasksLoad } = todoTasksSlice.actions;

export default todoTasksSlice.reducer;