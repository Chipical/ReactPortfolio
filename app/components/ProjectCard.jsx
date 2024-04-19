import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        src={imgUrl}
        alt={title}
        width={300}
        height={200}
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-gray-400 hover:border-white mr-2 group/link"
          >
            <EyeIcon className="h-10 w-10 text-gray-400 group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-gray-400 hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-gray-400 group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>
      <div className="text-white bg-gray-800 rounded-b-xl py-6 px-4 mt-3">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
