import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

      //Fetching data from the server
  useEffect(() => {
    setLoading(true);

    const { request, cancel } = userService.getAll<User>();
    request
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);


  return {users, error, isLoading, setUsers, setError};
}

export default useUsers;