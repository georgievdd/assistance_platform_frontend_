import { Routes, Route } from 'react-router-dom';
import DefaultP from '../../pages/main-page/default-page/DefaultP';
import ComeInP from '../../pages/main-page/comein-page/ComeInP';
import ServicesP from '../../pages/main-page/services-page/ServicesP';
import TasksP from '../../pages/main-page/tasks-page/TasksP';
import ToRegisterP from '../../pages/main-page/toregister-page/ToRegisterP';
import ProfileP from '../../pages/main-page/profile-page/ProfileP';
// import PersonalAriaP from '../../pages/main-page/personalaria-page/PersonalAriaP';
import MyTasksP from '../../pages/main-page/mytasks-page/MyTasksP';
import TODOtaskP from '../../pages/main-page/todotasks-page/TODOtasksP';
import MyApplicationsP from '../../pages/main-page/myapplications-page/MyApplicationsP';
import NewTaskP from '../../pages/main-page/new_task-page/NewTaskP';
import TaskInfoP from '../../pages/main-page/taskinfo-page/TaskInfoP';
import RedactMyTaskP from '../../pages/main-page/redactmytask-page/RedactMyTaskP';
import TaskApplicationsP from '../../pages/main-page/taskapplications-page/TaskApplicationsP';


export const HOME            = "/";
export const LOGIN           = "/login";
export const TASKS           = "/tasks";
export const REGISTRATION    = "/registration";
export const PROFILE         = "/profile";
export const MYTASKS         = "/mytasks";
export const TODOTASKS       = "/todotasks";
export const MYAPPLICATIONS  = "/myapplications";
export const NEWTASK         = MYTASKS + "/new_task";
export const TASKINFO        = TASKS + "/info";
export const REDACTMYTASK    = MYTASKS + "/redact";
export const TASKAPLICATIONS = MYTASKS + "/applications";

const Routs = () => {
	return (
		<div>
			<Routes>
				<Route exact path= {HOME}                 element={<TasksP />} />    {/* <DefaultP */}
				<Route path=       {LOGIN}                element={<ComeInP />} />
				<Route path=       {TASKS}                element={<TasksP />} />
				<Route path=       {REGISTRATION}         element={<ToRegisterP />} />
				<Route path=       {PROFILE}              element={<ProfileP />} />
				<Route path=       {MYTASKS}              element={<MyTasksP />} />
				<Route path=       {TODOTASKS}            element={<TODOtaskP />} />
				<Route path=       {MYAPPLICATIONS}       element={<MyApplicationsP />} />
				<Route path=       {NEWTASK}              element={<NewTaskP />} />
				<Route path=       {TASKINFO}             element={<TaskInfoP />} />
				<Route path=       {REDACTMYTASK}         element={<RedactMyTaskP />} />
				<Route path=       {TASKAPLICATIONS}      element={<TaskApplicationsP />} />
			</Routes>
		</div>
	)
}

export default Routs
