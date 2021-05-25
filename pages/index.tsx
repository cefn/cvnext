import React, { useEffect, useState, FunctionComponent } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "../src/Resume";
import { FillView } from "../src/FillView";

const Index: FunctionComponent = () => {
  const [browserDetected, setBrowserDetected] = useState<boolean | null>(null);
  useEffect(() => {
    setBrowserDetected(!!process.browser);
  }, [process.browser]);

  return (
    <FillView>
      <React.StrictMode>
        <div id="toppane" style={{ height: "50%" }}></div>
        <div id="bottompane" style={{ height: "50%" }}>
          {browserDetected ? (
            <PDFViewer style={{ height: "100%", width: "100%" }}>
              <Resume />
            </PDFViewer>
          ) : (
            <p>
              {browserDetected === null
                ? "Loading"
                : "Javascript required to load CV"}
            </p>
          )}
        </div>
      </React.StrictMode>
    </FillView>
  );
};

export default Index;
