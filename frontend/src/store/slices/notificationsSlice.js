import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	notifications: [],
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
	},
});

export const { putNotifications, deleteNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;