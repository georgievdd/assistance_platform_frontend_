import { createSlice } from '@reduxjs/toolkit';
import { LOAD_INIT } from '../../datafunc';

const initialState = {
	access: false,
	refresh: null,
	authLoad: LOAD_INIT,
	id: null,
	username: null,
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
		},
	},
	authDataLoad: LOAD_INIT,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserInfo(state, action) {
			state.profile = action.payload.profile;
			state.contacts = action.payload.contacts;
			state.id = action.payload.id;
			state.email = action.payload.email;
			state.username = action.payload.username;
			state.statistics = action.payload.statistics;
		},
		setAuthLoad(state, action) {
			state.authLoad = action.payload;
		},
		setAuthDataLoad(state, action) {
			state.authDataLoad = action.payload;
		},
		setUser(state, action) {
			state.access  = action.payload.access;
			state.refresh = action.payload.refresh;
		},
		setUsername(state, action) {
			state.username = action.payload;
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
		clearUserSlice(state) {
			state.access = initialState.access;
			state.refresh = initialState.refresh;
			state.authDataLoad = initialState.authDataLoad;
			state.authLoad = initialState.authLoad;
			state.contacts = initialState.contacts;
			state.email = initialState.email;
			state.id = initialState.id;
			state.profile = initialState.profile;
			state.statistics = initialState.statistics;
			state.username = initialState.username;
			state.email = initialState.email;
		},
	},
});

export const { 
	setUser, 
	clearUserSlice, 
	setUserInfo,
	setAuthLoad, 
	setAuthDataLoad,
	setUsername,
 } = userSlice.actions;

export default userSlice.reducer;