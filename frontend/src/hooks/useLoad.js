import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useLoad = () => {
	const authLoad                            = useSelector(state => state.user).authLoad;
  const authDataLoad                        = useSelector(state => state.user).authDataLoad;
  const usersLoad                           = useSelector(state => state.users).load;
  const mytasksLoad                         = useSelector(state => state.mytasks).load;
  const todotasksLoad                       = useSelector(state => state.todotasks).load;
  const tasksLoad                           = useSelector(state => state.tasks).load;
  const informational_endpointLoad          = useSelector(state => state.informational_endpoint).load;
  const notificationsLoad                   = useSelector(state => state.notifications).load;
  // const taskinfoLoad                        = useSelector(state => state.taskinfo);
  const applicationsLoad                    = useSelector(state => state.applications).load;
	const stateArray = [
    authLoad,
    usersLoad,
    authDataLoad,
    mytasksLoad,
    todotasksLoad,
    tasksLoad,
    informational_endpointLoad,
    notificationsLoad,
    applicationsLoad,
  ];

  console.log(stateArray);

  const [loading, setLoading] = useState(false);
  const [loadingPrev, setLoadingPrev] = useState(false);

  useEffect(() => {


    for (let load of stateArray) {
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