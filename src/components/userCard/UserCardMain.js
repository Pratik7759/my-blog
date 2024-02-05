import React, { Fragment } from "react";
import UserCard from "./UserCard";
import userCardData from "./userCardData";
import Heading from "../heading/Heading";

const UserCardMain = () => {
  return (
    <Fragment>
      <Heading />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:mt-12 mt-20 max-w-[1200px] mx-auto">
        {userCardData.map((user) => (
          <UserCard
            key={user.userId}
            imageSrc={user.imageSrc}
            heading={user.heading}
            content={user.content}
            name={user.name}
            topic={user.topic}
            userId={user.userId}
          />
        ))}
      </div>
    </Fragment>
  );
};
export default UserCardMain;
