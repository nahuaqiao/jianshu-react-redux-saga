import React from "react";
import { Outlet } from "react-router-dom";

interface Props {}

const AuthWrapper = (props: Props) => {
  return (
    <>
      <header>this is auth wrapper page.</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthWrapper;
