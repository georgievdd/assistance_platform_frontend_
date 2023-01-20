import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tasks: [],
	filters: {
		tags: [],
		subjects: [],
	}
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
	},
});

export const { setTODOtasks, deleteTODOtasks } = todoTasksSlice.actions;

export default todoTasksSlice.reducer;