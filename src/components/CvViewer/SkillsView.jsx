export default function SkillsView({ data = [] }) {
  return (
    <div style={{ marginBlockStart: "1rem" }}>
      <h3>Technical Skills</h3>
      <div>
        {data.map((exp) => {
          return <ExperienceItem experienceObject={exp} key={exp.id} />;
        })}
      </div>
    </div>
  );
}
function ExperienceItem({ experienceObject }) {
  return (
    <div
      style={{
        marginBlockStart: "1rem",
      }}
    >
      <div>
        <p>
          <span style={{ fontWeight: "bolder" }}>
            {experienceObject?.skillName}:
          </span>{" "}
          &nbsp;
          {experienceObject.skillDesc}
        </p>
      </div>
    </div>
  );
}
