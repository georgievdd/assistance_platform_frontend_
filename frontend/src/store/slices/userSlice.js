import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	access: null,
	refresh: null,
	id: null,
	username: null,
	email: null,
	profile: {
			first_name: null,
			last_name: null,
			biography: null,
			profile_image: null,
			stage_of_study: null,
			course_of_study: null
	},
	contacts: {
			first_name: null,
			email: null,
			phone: null,
			telegram: null,
			vk: null
	},
	statistics: {
		ratings: {
			author: {
				sum: null,
				amount: null,
				normalized: null
				},
				implementer: {
					sum: null,
					amount: null,
					normalized: null
				}
			},
			tasks: {
				authored: {
						active: null,
						total: null
				},
				implementered: {
						active: null,
						total: null
				},
				applications: {
						active: null,
						total: null
				}
		}
	}
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserInfo(state, action) {
			console.log("user: ", action.payload);
			state.profile = action.payload.profile;
			state.contacts = action.payload.contacts;
			state.id = action.payload.id;
			state.email = action.payload.email;
			state.username = action.payload.username;
			state.statistics = action.payload.statistics;
		},
		setUser(state, action) {
			state.access  = action.payload.access;
			state.refresh = action.payload.refresh;
		},
		deleteUser(state) {
			state.access                  = initialState.access;
			state.refresh                 = initialState.refresh;
			state.id                      = initialState.id;
			state.profile                 = initialState.profile;
			state.contacts                = initialState.contacts;
			state.email                   = initialState.email;
			state.username                = initialState.username;
			state.statistics              = initialState.statistics;
		},
	},
});

export const { setUser, deleteUser, setUserInfo } = userSlice.actions;

export default userSlice.reducer;