import React from "react";
import DeleteRequest from "./DeleteRequest";
import PersonList from "./PersonList";
import PostRequest from "./PostRequest";

const Get = () => {
  return (
    <div>
      <PersonList />
      <hr />
      <PostRequest />
      <hr />
      <DeleteRequest />
    </div>
  );
};

export default Get;
