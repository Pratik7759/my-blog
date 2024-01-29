import React, { Fragment } from "react";

export default function Heading() {
  return (
    <Fragment>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 cursor-pointer flex justify-center items-center animate-pulse hover:text-black">
        Welcome to My Blog
      </h1>
    </Fragment>
  );
}
