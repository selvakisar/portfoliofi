import React from "react";
import About from "./About";
import { IntroApp, Logo } from "../components/Constants";
import { Skill } from "./Skill";
import Topbar from "../components/Topbar";
import { SkillsCard } from "../components/Card";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="mx-3 grid  grid-col justify-center items-center">
    <div className=" ">
      <div>
        <Topbar />
      </div>
      <div>
        <IntroApp />
      </div>
      <div className=" ">
        <Logo />
      </div>
    </div>
    <div className="divider"></div>

    <div className="  px-2 py-2  rounded-3xl">
      <About />
    </div>

    <div className="  px-2 py-2  rounded-3xl">
      <Skill />
    </div>

    <div className="divider"></div>

    <div className="  px-2 py-2  rounded-3xl">
      <SkillsCard />
    </div>

    <div className="divider"></div>
    

    <div className="  px-2 py-2  rounded-3xl">
      <Projects/>
    </div>
  <div className="divider"></div>
  <div className="  px-2 py-2  rounded-3xl">
      <Contact/>
    </div>
  </div>
  );
}
