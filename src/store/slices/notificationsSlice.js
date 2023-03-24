import { createSlice } from '@reduxjs/toolkit';
import { LOAD_INIT } from '../../datafunc';

const initialState = {
	notifications: [],
	load: LOAD_INIT,
  new: null,
}

const notificationsSlice = createSlice({
	name: "notifications",
	initialState,
	reducers: {
		putNotifications(state, action) {
			state.new = action.payload.new;
      state.notifications = action.payload.notifications;
		},
		deleteNotifications(state) {
			state.notifications = initialState.notifications;
			state.new = initialState.new;
		},
		setNotificationsLoad(state, action) {
			state.load = action.payload;
		},
	},
});

export const { putNotifications, deleteNotifications, setNotificationsLoad } = notificationsSlice.actions;

export default notificationsSlice.reducer;