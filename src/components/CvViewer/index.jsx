import React from "react";
import PersonalInfoView from "./PersonalInfoView";
import EducationView from "./EducationView";
import ExperienceView from "./ExperienceView";
import "./style.css";
import SkillsView from "./SkillsView";
import { Document, Page } from "react-pdf";
export function CvViewer({
  data: { personalInfo, educationInfo, experienceInfo, skillsInfo },
  ...rest
}) {
  return (
    <Document file={"cv.pdf"} {...rest}>
      <Page>
        <PersonalInfoView data={personalInfo} />
        <EducationView data={educationInfo} />
        <ExperienceView data={experienceInfo} />
        <SkillsView data={skillsInfo} />
      </Page>
    </Document>
  );
}
