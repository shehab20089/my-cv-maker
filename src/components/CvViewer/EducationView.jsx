export default function EducationView({ data = [] }) {
  return (
    <div className="education-info">
      <h3>Education</h3>
      <div>
        {data.map((edu) => {
          return <EducationItem educationObject={edu} key={edu.id} />;
        })}
      </div>
    </div>
  );
}
function EducationItem({ educationObject }) {
  return (
    <div style={{ marginBlockStart: "1rem" }}>
      <div style={{ display: "flex" }}>
        <h4>{educationObject?.schoolName}</h4>&nbsp;
        <p>{educationObject.degree}</p>
        <p style={{ marginInlineStart: "auto" }}>{educationObject.startTime}</p>
        &nbsp; - &nbsp;<p>{educationObject.endTime}</p>
      </div>
      <p>{educationObject.grade}</p>
    </div>
  );
}
