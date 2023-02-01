import React from "react";
import {
  PersonalForm,
  EducationForm,
  ExperienceForm,
  SkillsForm,
} from "../Forms";
import "./main.css";

export function DataEntry({ onDataChanged, currentData, ...props }) {
  return (
    <div {...props} className="data-entry-container">
      <>
        <PersonalForm
          onChange={(data) => {
            onDataChanged({ ...currentData, personalInfo: data });
          }}
        />
        <EducationForm
          onChange={(data) => {
            onDataChanged({
              ...currentData,
              educationInfo: data,
            });
          }}
        />
        <ExperienceForm
          onChange={(data) => {
            onDataChanged({
              ...currentData,
              experienceInfo: data,
            });
          }}
        />
        <SkillsForm
          onChange={(data) => {
            onDataChanged({
              ...currentData,
              skillsInfo: data,
            });
          }}
        />
      </>
    </div>
  );
}
