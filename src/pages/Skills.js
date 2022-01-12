import React from "react";
import SkillCard from "../components/SkillCard";
import { skills } from "../doc/skills_File";

const Skills = () => {
  return (
    <div className="Skills mycontainer flex flex-col flex-center">
      <h1 className="Title">Skills</h1>
      <section className="Skills__container">
        {skills.map((_, index) => {
          return <SkillCard key={index} name={_.name} icon={_.icon} />;
        })}
      </section>
    </div>
  );
};

export default Skills;
