const EndPoints = {
	AUTH: {
		TOKEN: '/token',
	},
	REGISTRATIONS: '/users/registration',
	TASKS: '/tasks/',
	USERS: '/users/',
	INFORMATIONAL_ENDPOINT: '/informational_endpoint',
	MY_PROFILE: '/users/my_profile/',
	APPLY: '/apply',
	NEW_TASK: '/tasks/new_task',
	NOTIFICATIONS: '/notifications/',
	MY_APPLICATIONS: '/applications',
	MY_APPLICATION: '/my_application',
	SET_IMPLEMENTOR: '/set_implementer',
	EDIT_CONTACTS: '/edit_contacts',
	EDIT_PROFILE: '/edit_profile',
	CLOSE_TASK: (id) => `/tasks/${id}/close_task`,
}

export default EndPoints;

