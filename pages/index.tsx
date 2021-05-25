import React, { useEffect, useState, FunctionComponent } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "../src/Resume";
import { FillView } from "../src/Viewport";
import { Controls } from "../src/Controls";

const Index: FunctionComponent = () => (
  <FillView>
    <React.StrictMode>
      <div id="toppane" style={{ height: "30%" }}>
        <Controls />
      </div>
      <div
        id="bottompane"
        style={{ height: "70%" }}
        suppressHydrationWarning={true}
      >
        {process.browser ? (
          <PDFViewer style={{ height: "100%", width: "100%" }}>
            <Resume />
          </PDFViewer>
        ) : (
          <p>Please enable Javascript to load this CV</p>
        )}
      </div>
    </React.StrictMode>
  </FillView>
);

export default Index;
