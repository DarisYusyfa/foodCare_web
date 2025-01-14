import Image from "next/image";
import React from "react";

function AboutItem({ img, title, summary }) {
  return (
    <div className="flex flex-col justify-center items-center w-[360px] h-[360px] bg-white rounded-[24px] shadow-md p-2 mt-[-120px]">
      <a href="#">
        <Image width="200" height="195" src={img} alt="ill" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-base text-center font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm text-center font-medium text-gray-700 dark:text-gray-400">
          {summary}
        </p>
      </div>
    </div>
  );
}

export default AboutItem;
