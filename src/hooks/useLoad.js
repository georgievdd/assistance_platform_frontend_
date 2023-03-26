import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LOAD_INIT } from '../datafunc';

export const useLoad = () => {
	const authLoad                            = useSelector(state => state.user).authLoad;
  const authDataLoad                        = useSelector(state => state.user).authDataLoad;
  const usersLoad                           = useSelector(state => state.users).load;
  const mytasksLoad                         = useSelector(state => state.mytasks).load;
  const todotasksLoad                       = useSelector(state => state.todotasks).load;
  const tasksLoad                           = useSelector(state => state.tasks).load;
  const informational_endpointLoad          = useSelector(state => state.informational_endpoint).load;
  const notificationsLoad                   = useSelector(state => state.notifications).load;
  const applicationsLoad                    = useSelector(state => state.applications).load;
  const tasInforamationLoad                 = useSelector(state => state.taskinfo).load;
	const stateArray = [
    authLoad,
    authDataLoad,
    usersLoad,
    mytasksLoad,
    todotasksLoad,
    tasksLoad,
    informational_endpointLoad,
    notificationsLoad,
    applicationsLoad,
    tasInforamationLoad,
  ];


  console.log("useLoad", stateArray);

  // console.log(stateArray);

  const [loading, setLoading] = useState(false);
  const [loadingPrev, setLoadingPrev] = useState(false);

  useEffect(() => {


    for (let load of stateArray) {
      if (!load) return;
      if (!load.end && load.begin) {
        setLoading(true);
        setLoadingPrev(false);
        return;
      }
    }
    setLoading(false);
    setLoadingPrev(true);
  }, stateArray);

	return {
    loading,
    loadingPrev,
	}
}