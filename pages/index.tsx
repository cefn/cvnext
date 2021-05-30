import React, { FunctionComponent } from "react";
import { BasicStore, Immutable, Watcher } from "@lauf/lauf-store";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume, Viewport, Controls } from "../src/components/";
import { AppState, Entry, INITIAL_APPSTATE, Sort } from "../src/domain/types";
import { sortEntries } from "../src/util";
import { ALL_ENTRIES } from "../src/domain/data";

const store = new BasicStore<AppState>(INITIAL_APPSTATE);

let lastLimit = -1;
let lastSortOrder: ReadonlyArray<Sort> = [];
const limitWatcher: Watcher<Immutable<AppState>> = (state) => {
  console.log(state);
  const { limit, sortOrder } = state;
  if (limit !== lastLimit || sortOrder !== lastSortOrder) {
    lastLimit = limit;
    lastSortOrder = sortOrder;
    let filteredEntries = sortEntries(ALL_ENTRIES, sortOrder);
    filteredEntries = filteredEntries.slice(0, limit);
    store.edit((draft) => {
      draft.priorityEntries = filteredEntries as Entry[];
    });
  }
};
limitWatcher(store.read());
store.watch(limitWatcher);

const Index: FunctionComponent = () => {
  return (
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
};

export default Index;
