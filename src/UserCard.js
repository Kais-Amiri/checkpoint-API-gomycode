import React from "react";

function userCard({ user: { name, username, email } }) {
  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        border: "1px solid black",
        color: "black",
        margin: "1%",
        padding: "1%",
        whiteSpace: "-moz-pre-wrap",
        fontSize: "0.9rem",
        overflow: "hidden",
      }}
    >
      <img
        src="https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
        alt="user image"
        width="80%"
      />
      <p>
        <span style={{ color: "red" }}>Name :</span> {name}
      </p>
      <p>
        <span style={{ color: "red" }}>Username :</span> {username}
      </p>
      <p>
        <span style={{ color: "red" }}>E-mail :</span> {email}
      </p>
    </div>
  );
}

export default userCard;
