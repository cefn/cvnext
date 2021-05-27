import React, { useEffect, useState, FunctionComponent } from "react";
import { BasicStore, Immutable } from "@lauf/lauf-store";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume, Viewport, Controls} from "../src/components/";
import { Engagement, Profile } from "../src/domain/types"
import { ENGAGEMENTS } from "../src/domain/data";

const INITIAL_PROFILE: Immutable<Profile> = {
  limit: Number.MAX_SAFE_INTEGER,
  limitedEngagements: ENGAGEMENTS,
};

const store = new BasicStore(INITIAL_PROFILE);

const Index: FunctionComponent = () => (
  <Viewport>
    <React.StrictMode>
      <div id="toppane" style={{ height: "10%" }}>
        <Controls store={store} />
      </div>
      <div
        id="bottompane"
        style={{ height: "90%" }}
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
