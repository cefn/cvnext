import React, { FunctionComponent } from "react";
import { castDraft } from "immer";
import { BasicStore, Immutable, Watcher } from "@lauf/lauf-store";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume, Viewport, Controls } from "../src/components/";
import { AppState, INITIAL_APPSTATE, SORTS } from "../src/domain/types";
import { sortEntries } from "../src/util";
import { ALL_ENTRIES } from "../src/domain/data";

const store = new BasicStore<AppState>(INITIAL_APPSTATE);

let limit = -1;
const limitWatcher: Watcher<Immutable<AppState>> = (state) => {
  if (state.limit !== limit) {
    limit = state.limit;
    store.edit((draft) => {
      draft.filteredEntries = castDraft(
        sortEntries(ALL_ENTRIES, SORTS).slice(0, limit)
      );
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
