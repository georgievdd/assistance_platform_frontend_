import { Routes, Route } from 'react-router-dom';
import DefaultP from '../../pages/main-page/default-page/DefaultP';
import LoginP from '../../pages/main-page/comein-page/LoginP';
import ServicesP from '../../pages/main-page/services-page/ServicesP';
import TasksP from '../../pages/main-page/tasks-page/TasksP';
import ToRegisterP from '../../pages/main-page/toregister-page/ToRegisterP';
import ProfileP from '../../pages/main-page/profile-page/ProfileP';
// import PersonalAriaP from '../../pages/main-page/personalaria-page/PersonalAriaP';
import MyTasksP from '../../pages/main-page/mytasks-page/MyTasksP';
import TODOtaskP from '../../pages/main-page/todotasks-page/TODOtasksP';
import MyApplicationsP from '../../pages/main-page/myapplications-page/MyApplicationsP';
import NewTaskP from '../../pages/main-page/new_task-page/NewTaskP';
import TaskInformationP from '../../pages/main-page/taskinformation-page/TaskInformationP';
import RedactMyTaskP from '../../pages/main-page/redactmytask-page/RedactMyTaskP';
import TaskApplicationsP from '../../pages/main-page/taskapplications-page/TaskApplicationsP';
import UsersP from '../../pages/main-page/users-page/UsersP';

export const rConfig = {
	id: "/:id",
}

export const HOME            = "/";
export const LOGIN           = "/login";
export const TASKS           = "/tasks";
export const USERS           = "/users";
export const PROFILE         = "/profile";
export const MYTASKS         = "/mytasks";
export const TODOTASKS       = "/todotasks";
export const REGISTRATION    = "/registration";
export const MYAPPLICATIONS  = "/myapplications";
export const TASKINFORMATION = TASKS   + rConfig.id;
export const REDACTMYTASK    = MYTASKS + "/redact";
export const NEWTASK         = MYTASKS + "/new_task";
export const TASKAPLICATIONS = MYTASKS + "/applications";

const Routs = () => {
	return (
		<div>
			<Routes>
				<Route exact path= {HOME}                 element={<TasksP />} />    {/* <DefaultP */}
				<Route path=       {LOGIN}                element={<LoginP />} />
				<Route path=       {TASKS}                element={<TasksP />} />
				<Route path=       {REGISTRATION}         element={<ToRegisterP />} />
				<Route path=       {PROFILE}              element={<ProfileP />} />
				<Route path=       {MYTASKS}              element={<MyTasksP />} />
				<Route path=       {TODOTASKS}            element={<TODOtaskP />} />
				<Route path=       {MYAPPLICATIONS}       element={<MyApplicationsP />} />
				<Route path=       {NEWTASK}              element={<NewTaskP />} />
				<Route path=       {TASKINFORMATION}      element={<TaskInformationP />} />
				<Route path=       {REDACTMYTASK}         element={<RedactMyTaskP />} />
				<Route path=       {TASKAPLICATIONS}      element={<TaskApplicationsP />} />
				<Route path=       {USERS}                element={<UsersP />} />
			</Routes>
		</div>
	)
}

export default Routs;



export const createRoute = arr => {
	let path = '';
	arr.map(e => {
		path += e + '/';
	});
	return path;
}