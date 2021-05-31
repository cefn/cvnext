import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { Immutable, Store } from "@lauf/lauf-store";
import { AppState, Entry, ScoreName, SCORERS } from "./types";
import { Resume } from "./components";

export async function downloadPdf(store: Store<AppState>) {
  const blob = await pdf(<Resume store={store} />).toBlob();
  saveAs(blob, "CV - Cefn Hoile.pdf");
}

export function sortEntries(
  entries: Immutable<Entry[]>,
  scorePriority: Immutable<ScoreName[]>
) {
  const sortedEntries: Immutable<Entry>[] = [...entries];
  sortedEntries.sort((a: Immutable<Entry>, b: Immutable<Entry>) => {
    for (const sort of scorePriority) {
      const scorer = SCORERS[sort];
      const diff = scorer(b) - scorer(a);
      if (diff !== 0) {
        return diff;
      }
    }
    return 0;
  });
  return sortedEntries;
}
