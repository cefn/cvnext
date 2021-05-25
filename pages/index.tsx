import React, { useEffect, useState, FunctionComponent } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "../src/Resume";

const Index: FunctionComponent = () => {
  const [browserDetected, setBrowserDetected] = useState<boolean | null>(null);
  useEffect(() => {
    setBrowserDetected(!!process.browser);
  }, [process.browser]);

  return (
    <>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>

      <React.StrictMode>
        <div id="viewport" style={{ height: "100%" }}>
          <div id="viewupper" style={{ height: "50%" }}></div>
          <div id="viewlower" style={{ height: "50%" }}>
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
        </div>
      </React.StrictMode>
    </>
  );
};

export default Index;
