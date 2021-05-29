import React, { FunctionComponent } from "react";
import { BasicStore } from "@lauf/lauf-store";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume, Viewport, Controls } from "../src/components/";
import { AppState, INITIAL_APPSTATE } from "../src/domain/types";

const store = new BasicStore<AppState>(INITIAL_APPSTATE);

const Index: FunctionComponent = () => (
  <Viewport>
    <React.StrictMode>
      <div id="toppane" style={{ height: "30%" }}>
        <Controls store={store} />
      </div>
      <div
        id="bottompane"
        style={{ height: "70%" }}
        suppressHydrationWarning={true}
      >
        {process.browser ? (
          <PDFViewer style={{ height: "100%", width: "100%" }}>
            <Resume store={store} />
          </PDFViewer>
        ) : (
          <p>Please enable Javascript to load this CV</p>
        )}
      </div>
    </React.StrictMode>
  </Viewport>
);

export default Index;
