import { createSlice } from '@reduxjs/toolkit';
import { LOAD_INIT } from '../../datafunc';

const initialState = {
  users: [],
	load: LOAD_INIT,
}

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUsers(state, action) {
			state.users = action.payload;
		},
		setUsersLoad(state, action) {
			state.load = action.payload;
		},
		clearUsersSlice(state) {
			state.users = initialState.users;
			state.load = initialState.load;
		},
	},
});

export const {
	setUsers, 
	setUsersLoad,
	clearUsersSlice
} = usersSlice.actions;

export default usersSlice.reducer;