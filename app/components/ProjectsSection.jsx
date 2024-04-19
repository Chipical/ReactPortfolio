"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
const projectsData = [
  {
    id: 1,
    title: "GES Website",
    description:
      "Commercial Website For Gordons Electrical Supplies Made Using React",
    image: "/images/projects/1.png",
    tag: ["All", "Commercial"],
    gitUrl: "https://www.gordonselectricalsupplies.com/",
    previewUrl: "https://www.gordonselectricalsupplies.com/",
  },
  {
    id: 2,
    title: "React Full Website",
    description: "Full Demo Website Based On Video Game FFXIV Made Using React",
    image: "/images/projects/2.png",
    tag: ["All", "Demo"],
    gitUrl: "https://github.com/Chipical/ScionsReactDemo",
    previewUrl: "https://scions-react-demo.vercel.app/",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description:
      "Tic Tac Toe Game, With Customisable Names And Move List, Made Using React",
    image: "/images/projects/3.png",
    tag: ["All", "Demo"],
    gitUrl: "https://github.com/Chipical/ReactTicTacToe",
    previewUrl: "https://react-tic-tac-toe-five-omega.vercel.app/",
  },
  {
    id: 4,
    title: "Bread Shop",
    description: "Shopping Website with Cart To Demonstrate Using ContextAPI ",
    image: "/images/projects/4.png",
    tag: ["All", "Demo"],
    gitUrl: "https://github.com/Chipical/ReactContextAPI",
    previewUrl: "https://react-context-api-rose.vercel.app/",
  },
  {
    id: 5,
    title: "Reaction Time",
    description:
      "A Reaction / Time Measurement Game Made Using React To Demonstrate Refs And Portals",
    image: "/images/projects/5.png",
    tag: ["All", "Demo"],
    gitUrl: "https://github.com/Chipical/ReactRef-Portal",
    previewUrl: "https://react-ref-portal.vercel.app/",
  },
  {
    id: 6,
    title: "Projects Manager",
    description:
      "A Projects Management Website That Allows User To Add Projects And Tasks Within Each Project Made Using React",
    image: "/images/projects/6.png",
    tag: ["All", "Demo"],
    gitUrl: "https://github.com/Chipical/React-Projects-Manager-Demo",
    previewUrl: "https://react-projects-demo-26eg.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Demo"
          isSelected={tag === "Demo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Commercial"
          isSelected={tag === "Commercial"}
        />
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
