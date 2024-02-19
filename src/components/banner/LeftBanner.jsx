import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaLinkedinIn, FaReact,FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss,SiSpring,SiJavascript,SiMysql } from "react-icons/si";
import { FaJava,FaHtml5 } from "react-icons/fa6";
import { CiHashtag } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Backend Developer.", "Full Stack Developer.", "Software Engineer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });

    const openGitHub = () => {
      window.open("https://github.com/AbhishekGumme", "_blank");
    };
  
    const openTwitter = () => {
      window.open("https://twitter.com/YourTwitterUsername", "_blank");
    };
  
    const openLinkedIn = () => {
      window.open("https://linkedin.com/in/abhishek-gumme-5b323419b", "_blank");
    };
  

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Abhishek Gumme</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" onClick={openGitHub}>
              <BsGithub />
            </span>
            <span className="bannerIcon" onClick={openTwitter}>
              <FaTwitter />
            </span>
            <span className="bannerIcon" onClick={openLinkedIn}>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiSpring />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <CiHashtag />
            </span>
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <FaCss3Alt />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner