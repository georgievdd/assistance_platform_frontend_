import * as auth                    from './auth';
import * as tasks                   from './tasks';
import * as user                    from './user';
import * as profile                 from './profile';
import * as informational_endpoint  from './informational_endpoint';
import * as notifications           from './notifications';
import * as applications            from './applications';
import * as users                   from './users';
const api = {
	auth,
	tasks, 
	user,
	profile,
	informational_endpoint,
	notifications,
	applications,
	users,
}

export default api;