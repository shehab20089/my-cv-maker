export default function PersonalInfoView({ data }) {
  return (
    <div className="personal-info">
      <h2>{data?.fullName ?? "Your Name"}</h2>
      <div>
        <span>
          <a href={`mailto: ${data?.email}`}>{data?.email ?? "Your mail"}</a>
        </span>
        &nbsp; | <span>{data?.phone ?? "+200000000154894"}</span> |{" "}
        <span>
          <a href={data?.githubLink}> Github</a>
        </span>{" "}
        | &nbsp;
        <span>
          <a href={data?.linkedInLink}> LinkedIn</a>
        </span>
      </div>
    </div>
  );
}
