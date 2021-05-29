import { Immutable } from "@lauf/lauf-store";
import { Entry, Sort, SORT_ACCESSORS } from "./domain/types";

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
