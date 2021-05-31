import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { Immutable, Store } from "@lauf/lauf-store";
import { AppState, Category, Entry, ScoreName, Scorer, Tag } from "./types";
import { Resume } from "./components";
import { SCORERS } from "./score";
import { CATEGORIES } from "./data";

export const LAUNCH_TIME = new Date().getTime();

export async function downloadPdf(store: Store<AppState>) {
  const blob = await pdf(<Resume store={store} />).toBlob();
  saveAs(blob, "CV - Cefn Hoile.pdf");
}

export function getCategory(entry: Immutable<Entry>): Category | null {
  for (const tag of entry.tags) {
    for (const category of CATEGORIES) {
      if (tag === category) {
        return tag;
      }
    }
  }
  return null;
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

/** Scorer ensuring Entries dominate if they contain specific tags */
export function createTagsScorer(...tags: Tag[]): Scorer {
  return (entry) => {
    for (const tag of tags) {
      if (entry.tags.includes(tag)) {
        return 1;
      }
    }
    return 0;
  };
}
