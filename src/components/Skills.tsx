import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="skills-sec">
       <h1 className="skills">
        Skills
      </h1>
      <div className="skills-left">
     
        <div>
          <h1 className="skills-h">
            From Biochemistry to Artificial Intelligence
          </h1>

          <div data-aos="zoom-out">
            <p className="skills-p">
              I have completed my Master &apos;s in Biochemistry, where I gained
              in-depth knowledge of molecular processes and scientific research
              methodologies. Currently, I am expanding my skill set by pursuing
              a course in Artificial Intelligence (AI). This unique combination
              of expertise allows me to bridge the gap between biological
              sciences and advanced AI technologies, enabling innovative
              solutions in fields like bioinformatics, healthcare analytics, and
              pharmaceutical research. My goal is to leverage AI tools to
              address complex biological challenges and contribute to
              groundbreaking discoveries in science and technology.
            </p>
          </div>
        </div>

        <div className="skills-right" data-aos="zoom-out">
          <div className="skills-col">
            <h3>NEXT.JS</h3>
            <h3>TYPESCRIPT</h3>
            <h3>TAILWIND</h3>
          </div>

          <div className="skills-col">
            <h3>HTML</h3>
            <h3>CSS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
