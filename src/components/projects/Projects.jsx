import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="Moto-Spa complete Automotive solutation"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          githubLink="https://github.com/AbhishekGumme/Motospa"
          websiteLink="https://example.com/social-media-clone"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          githubLink="https://github.com/AbhishekGumme/E-commerce-"
          websiteLink="https://example.com/social-media-clone"
        />
        <ProjectsCard
          title="WhatsUp clone"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          githubLink="https://github.com/AbhishekGumme/Social-Media-Clone"
          websiteLink="https://example.com/social-media-clone"
        />
        <ProjectsCard
          title="River-side Hotel"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          githubLink="https://github.com/AbhishekGumme/Riverside-Hotel"
          websiteLink="https://example.com/social-media-clone"
        />
        <ProjectsCard
          title="Food-Menu-App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          githubLink="https://github.com/AbhishekGumme/Food-Menu-App"
          websiteLink="https://example.com/social-media-clone"
        />
        <ProjectsCard
          title="Ideentity-AspCore"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          githubLink="https://github.com/AbhishekGumme/Asp.netcore-Identity"
          websiteLink="https://example.com/social-media-clone"
        />
      </div>
    </section>
  );
}

export default Projects