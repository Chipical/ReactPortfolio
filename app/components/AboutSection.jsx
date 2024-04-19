"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-2">Front End Development</li>
        <li className="mb-2">JavaScript</li>
        <li className="mb-2">React</li>
        <li className="mb-2">Python</li>
        <li className="mb-2">Documentation Writing</li>
        <li className="mb-2">Planning</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-2 ">
          PGCE In Computing
          <p className="text-orange-400 ml-4">University Of Sunderland</p>
        </li>
        <li className="mb-2">
          Bachelor of Science(Honours) Computer Science with Games Development
          <p className="text-orange-400 ml-4">Northumbria University</p>
        </li>
        <li className="mb-2">
          Access Diploma in Computing Business and Multimedia
          <p className="text-orange-400 ml-4">
            Belfast Metropolitan College Millfield
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-2">
          Post Graduate Certificate in Education with QTS
        </li>
        <li>2:1 Second Class Honours (Uppers Division) In Computer Science</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/hero/aboutme.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Minim eiusmod pariatur nostrud dolor enim cupidatat excepteur.
            Mollit irure occaecat dolor do sint deserunt est laborum dolore
            nulla voluptate Lorem. Exercitation quis duis cupidatat amet non
            esse occaecat ad eu pariatur enim proident sint cillum. Velit et do
            mollit dolor do. Velit reprehenderit aute pariatur dolore minim eu
            mollit commodo.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
