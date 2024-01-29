import Image from "next/image";
import React from "react";

const AuthorDetails = ({ name, content, imageSrc }) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-gradient-to-r from-[#8DD5E4] via-[#86A8E7] to-[#818CDB] min-h-screen px-6 py-20">
      <div className="max-w-[900px] mx-auto">
        <button
          className="text-sm font-semibold max-w-[900px]  flex gap-2 cursor-pointer items-center"
          type="button"
          onClick={goBack}
        >
          <Image
            src="/images/leftArrow.png"
            width={16}
            height={10}
            alt="leftArrow"
          />
          back
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto mt-3">
        <Image
          src={`/images/${imageSrc}`}
          alt={`authorImage`}
          width={100}
          height={400}
          layout="responsive"
          className="cover rounded-xl max-h-[400px] max-w-[900px] object-cover mx-auto"
        />
        <div className="max-w-[900px] mx-auto mt-4">
          <div className="flex flex-row gap-3 items-center">
            <Image
              src={`/images/${imageSrc}`}
              alt="BlogUserImage"
              width={40}
              height={40}
              className="rounded-full h-10"
            />
            <h2 className="cursor-pointer text-xl font-bold text-black-500 hover:underline ">
              {name}
            </h2>
          </div>
          <p className="text-base font-medium mt-1">{content}</p>
        </div>
      </div>
    </div>
  );
};
export default AuthorDetails;
