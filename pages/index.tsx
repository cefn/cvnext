import React, { FunctionComponent } from "react";
import { BasicStore } from "@lauf/lauf-store";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume, Viewport, Controls } from "../src/components/";
import { AppState } from "../src/types";
import { Grid } from "@material-ui/core";
import { ensurePriorityEntries, INITIAL_APPSTATE } from "../src/logic";

const store = new BasicStore<AppState>(INITIAL_APPSTATE);

ensurePriorityEntries(store);

const Index: FunctionComponent = () => {
  return (
    <Viewport>
      <React.StrictMode>
        <Grid container style={{ height: "100%" }}>
          <Grid item xs={3} style={{ height: "100%" }}>
            <Controls store={store} />
          </Grid>
          <Grid item xs={9} suppressHydrationWarning={true}>
            {process.browser ? (
              <PDFViewer style={{ height: "100%", width: "100%" }}>
                <Resume store={store} />
              </PDFViewer>
            ) : (
              <p>Please enable Javascript to load this CV</p>
            )}
          </Grid>
        </Grid>
      </React.StrictMode>
    </Viewport>
  );
};

export default Index;
