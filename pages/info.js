import Router from "next/router";
import React from "react";
import { MainLayout } from "../components/MainLayout";

const info = () => {
  const linkClickHandler = (path) => {
    Router.push(path);
  };
  return (
    <MainLayout>
      <React.Fragment>
        <div>INFO</div>
        <button onClick={() => linkClickHandler("/posts")}>TO POSTS</button>
        <button onClick={() => linkClickHandler("/")}>TO HOME</button>
      </React.Fragment>
    </MainLayout>
  );
};

export default info;
