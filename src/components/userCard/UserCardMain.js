import React from "react";
import UserCard from "./UserCard";
import userCardData from "./userCardData";

export default function UserCardMain() {
  return (
    <div className="bg-gradient-to-r from-[#8DD5E4] from-20% via-[#86A8E7] via-50% to-[#818CDB] to-90%">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6  p-6 max-w-[1200px] mx-auto ">
        {userCardData.map((user, index) => (
          <UserCard
            key={index}
            imageSrc={user.imageSrc}
            heading={user.heading}
            content={user.content}
            name={user.name}
            topic={user.topic}
          />
        ))}
      </div>
    </div>
  );
}
