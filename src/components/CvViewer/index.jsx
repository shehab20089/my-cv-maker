import React, { useRef } from "react";
import PersonalInfoView from "./PersonalInfoView";
import EducationView from "./EducationView";
import ExperienceView from "./ExperienceView";
import "./style.css";
import SkillsView from "./SkillsView";

export function CvViewer({
  data: { personalInfo, educationInfo, experienceInfo, skillsInfo },
  parentRef,
  ...rest
}) {
  return (
    <div ref={parentRef} {...rest}>
      <PersonalInfoView data={personalInfo} />
      <EducationView data={educationInfo} />
      <ExperienceView data={experienceInfo} />
      <SkillsView data={skillsInfo} />
    </div>
  );
}
