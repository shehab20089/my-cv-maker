import { useState, useRef } from "react";
import { DataEntry, Header, Section, CvViewer } from "./components";
import { useReactToPrint } from "react-to-print";

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
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
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
          <button onClick={handlePrint}>Print</button>
        </Section>

        <Section>
          <CvViewer data={enteredData} parentRef={componentRef} />
        </Section>
      </div>
    </>
  );
}

export default App;
