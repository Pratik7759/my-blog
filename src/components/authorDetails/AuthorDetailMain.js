"use client";

import React, { Fragment } from "react";
import AuthorDetails from "@/components/authorDetails/AuthorDetails";
import userCardData from "@/components/userCard/userCardData";
import { usePathname } from "next/navigation";

const AuthorDetailMain = () => {
  const pathName = usePathname();
  return (
    <Fragment>
      {userCardData.map((user) =>
        pathName === `/authorDetails/${user.userId}` ? (
          <AuthorDetails
            key={user.userId}
            imageSrc={user.imageSrc}
            content={user.content}
            name={user.name}
          />
        ) : null
      )}
    </Fragment>
  );
};

export default AuthorDetailMain;
