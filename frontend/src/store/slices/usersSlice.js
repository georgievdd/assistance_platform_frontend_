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
	},
});

export const { setUsers, setUsersLoad } = usersSlice.actions;

export default usersSlice.reducer;