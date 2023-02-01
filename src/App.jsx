import { useState } from "react";
import { DataEntry, Header, Section, CvViewer } from "./components";
function App() {
  const [enteredData, setEnteredData] = useState({
    personalInfo: {
      fullName: "Your Name",
      phone: "+310654564894",
      email: "your@email.com",
      githubLink: "https//:www.github.com",
      linkedInLink: "https://www.linkedin.com/in/shehab-mohsen-6ba984168/",
    },
  });

  return (
    <>
      <Header />
      <div className="sections-container">
        <Section>
          <DataEntry
            onDataChanged={(data) => setEnteredData(data)}
            currentData={enteredData}
          />
        </Section>

        <Section>
          <CvViewer data={enteredData} />
        </Section>
      </div>
    </>
  );
}

export default App;
