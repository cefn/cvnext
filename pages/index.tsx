import React, { FunctionComponent } from "react";
import { BasicStore, Immutable, Watcher } from "@lauf/lauf-store";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume, Viewport, Controls } from "../src/components/";
import { AppState, Entry, INITIAL_APPSTATE, ScoreName } from "../src/types";
import { sortEntries } from "../src/util";
import { ALL_ENTRIES } from "../src/data";
import { Grid } from "@material-ui/core";

const store = new BasicStore<AppState>(INITIAL_APPSTATE);

let lastLimit = -1;
let lastSortOrder: ReadonlyArray<ScoreName> = [];
const limitWatcher: Watcher<Immutable<AppState>> = (state) => {
  console.log(state);
  const { limit, scorePriority: sortOrder } = state;
  if (limit !== lastLimit || sortOrder !== lastSortOrder) {
    lastLimit = limit;
    lastSortOrder = sortOrder;
    store.edit((draft) => {
      const priorityEntries = sortEntries(ALL_ENTRIES, sortOrder).slice(
        0,
        limit
      ) as Entry[]; //draft can't be immutable
      draft.priorityEntries = priorityEntries;
    });
  }
};
limitWatcher(store.read());
store.watch(limitWatcher);

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
