import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tasks: [],
	filters: {
		tags: [],
		subjects: [],
	}
}

const myTasksSlice = createSlice({
	name: "mytasks",
	initialState,
	reducers: {
		setMyTasks(state, action) {
			state.tasks = action.payload.tasks;
			state.filters = action.payload.filters;
		},
		deleteMyTasks(state) {
			state.tasks = initialState.tasks;
			state.filters = initialState.filters;
		},
	},
});

export const { setMyTasks, deleteMyTasks } = myTasksSlice.actions;

export default myTasksSlice.reducer;