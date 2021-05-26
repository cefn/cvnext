import React, { useEffect, useState, FunctionComponent } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "../src/Resume";
import { FillView } from "../src/Viewport";
import { Controls } from "../src/Controls";

import { Store, BasicStore } from "@lauf/lauf-store";
import { useSelected } from "@lauf/lauf-store-react";
import { Engagement, ENGAGEMENTS } from "../src/data";
import { Immutable } from "../src/immutable";

export interface Profile {
  limit: number;
  limitedEngagements: Engagement[];
}

const INITIAL_PROFILE: Immutable<Profile> = {
  limit: Number.MAX_SAFE_INTEGER,
  limitedEngagements: ENGAGEMENTS,
};

const store = new BasicStore(INITIAL_PROFILE);

const Index: FunctionComponent = () => (
  <FillView>
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
  </FillView>
);

export default Index;
