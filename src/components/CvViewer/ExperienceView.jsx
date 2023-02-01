export default function ExperienceView({ data = [] }) {
  return (
    <div style={{ marginBlockStart: "1rem" }}>
      <h3>Professional Experience</h3>
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
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div style={{ display: "flex" }}>
        <h4>{experienceObject?.role}</h4>&nbsp;
        <p style={{ marginInlineStart: "auto" }}>
          {experienceObject.startTime}
        </p>
        &nbsp; - &nbsp;<p>{experienceObject.endTime}</p>
      </div>
      <div style={{ display: "flex" }}>
        <p>{experienceObject?.companyName}</p>&nbsp;
        <p style={{ marginInlineStart: "auto" }}>{experienceObject.location}</p>
      </div>
      <p>{experienceObject.description}</p>
    </div>
  );
}
