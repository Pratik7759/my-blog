"use client";

import React, { Fragment } from "react";
import AuthorDetails from "@/components/authorDetails/AuthorDetails";
import userCardData from "@/components/userCard/userCardData";

const AuthorDetailMain = () => {
  return (
    <Fragment>
      {userCardData.map((user) => (
        <AuthorDetails
          key={user.userId}
          imageSrc={user.imageSrc}
          content={user.content}
          name={user.name}
        />
      ))}
    </Fragment>
  );
};

export default AuthorDetailMain;