// import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <>
      <h1>Ooops!! Some things went wrong</h1>
      <p>{console.log(err)}</p>
      <p>{err.data}</p>
      <p>{err.status}</p>
      <p>{err.statusText}</p>
    </>
  );
};

export default Error;
