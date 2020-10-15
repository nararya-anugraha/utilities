import React from "react";
import useUsers from "@hooks/useUsers";

const ContextHooks = () => {
  const { users, loading } = useUsers();

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h1>Context and Hooks</h1>
      <table>
        <thead>
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>Phone</td>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContextHooks;
