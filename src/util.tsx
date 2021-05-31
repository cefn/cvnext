import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { Immutable, Store } from "@lauf/lauf-store";
import { AppState, Entry, Sort, SORT_ACCESSORS } from "./domain/types";
import { Resume } from "./components";

export async function downloadPdf(store: Store<AppState>) {
  const blob = await pdf(<Resume store={store} />).toBlob();
  saveAs(blob, "CV - Cefn Hoile.pdf");
}

export function sortEntries(
  entries: Immutable<Entry[]>,
  order: Immutable<Sort[]>
) {
  const sortedEntries: Immutable<Entry>[] = [...entries];
  sortedEntries.sort((a: Immutable<Entry>, b: Immutable<Entry>) => {
    for (const sort of order) {
      const accessor = SORT_ACCESSORS[sort];
      const diff = accessor(b) - accessor(a);
      if (diff !== 0) {
        return diff;
      }
    }
    return 0;
  });
  return sortedEntries;
}
