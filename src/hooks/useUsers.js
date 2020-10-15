import { useCallback, useEffect } from "react";
import { useAppContext } from "@contexts/AppContext";

const fetchUsers = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((response) => response.json());

const useUsers = () => {
  const { state, setState } = useAppContext();
  const { users = [], usersAreLoading = true } = state;

  // We are using callback here because it's used as dependency in the useEffect bellow
  const refreshUsers = useCallback(() => {
    setState({ usersAreLoading: true });
    fetchUsers
      .then((newUsers) => setState({ users: newUsers }))
      .finally(() => setState({ usersAreLoading: false }));
  }, [setState]);

  // On first load, this will fetch the API
  useEffect(() => {
    refreshUsers();
  }, [refreshUsers]);

  return {
    users,
    loading: usersAreLoading,
  };
};

export default useUsers;
