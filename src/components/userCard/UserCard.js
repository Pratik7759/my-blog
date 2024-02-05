import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserCard = ({ heading, content, name, topic, imageSrc, userId }) => {
  const backgroundColor =
    topic === "Fashion"
      ? "bg-[#46BAF1]"
      : topic === "Technology"
      ? "bg-[#3F4D33]"
      : topic === "Adventure"
      ? "bg-[#E54138]"
      : topic === "Food"
      ? "bg-[#DCAC6A]"
      : "";

  return (
    <div className="bg-white rounded-xl hover:shadow-none shadow-fuchsia-950 shadow-2xl cursor-pointer">
      <Image
        src={`/images/${imageSrc}`}
        alt={`/images/${imageSrc}`}
        width={100}
        height={100}
        layout="responsive"
        className="cover rounded-t-xl min-h-[230px] max-h-[230px] object-cover"
      />
      <div className="p-4 flex flex-col justify-between min-h-[270px]">
        <div>
          <p
            className={`px-3 py-[2px] text-white rounded-full text-sm max-w-max ${backgroundColor}`}
          >
            {topic}
          </p>
          <h2 className="text-lg font-semibold mt-1">{heading}</h2>
          <p className="text-sm mt-1">{content}</p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Image
            src={`/images/${imageSrc}`}
            alt="BlogUserImage"
            width={40}
            height={40}
            className="rounded-full h-10"
          />
          <p className="cursor-pointer text-base font-semibold text-gray-500 hover:underline">
            <Link href={`/authorDetails/${userId}`}>{name}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
