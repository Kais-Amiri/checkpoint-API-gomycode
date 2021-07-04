import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

function UserList() {
  const [listOfUser, setListOfUsers] = useState([]);
  const [error, setError] = useState("");

  const getListOfUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setListOfUsers(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => getListOfUsers(), []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {error === "" ? (
        listOfUser.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <h4>{error}</h4>
      )}
    </div>
  );
}

export default UserList;
