import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import usersReduser from './slices/usersSlice';
import tasksReduser from './slices/tasksSlice';
import informational_endpointReducer from './slices/informational_endpointSlice';
import myTasksReducer from './slices/myTasksSlice';
import todoTasksReducer from './slices/todoTasksSlice';
import notificationsReducer from './slices/notificationsSlice';
import taskInfoReducer from './slices/taskInformationSlice';
import applicationReducer from './slices/applicationsSlice';
import sendApplicationReducer from './slices/sendApplicationSlice';
import editProfileReducer from './slices/editProfileSlice';


import {
	persistReducer,
	persistStore,
	FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const rootReducer = combineReducers({
	user: userReducer,
  users: usersReduser,
  mytasks: myTasksReducer,
  todotasks: todoTasksReducer,
  tasks: tasksReduser,
  informational_endpoint: informational_endpointReducer,
  notifications: notificationsReducer,
  taskinfo: taskInfoReducer,
  applications: applicationReducer,
  sendapplication: sendApplicationReducer,
  editprofile: editProfileReducer,
});

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;