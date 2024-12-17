import React from "react";
import users from "../data/users";

function UsersList() {
  return (
    <>
      <h2>UsersList:</h2>

      {users.map((user) => (
        <>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </>
      ))}

      {users.map((user) => (
        <h3>{user.phone}</h3>
      ))}
    </>
  );
}
export default UsersList;
