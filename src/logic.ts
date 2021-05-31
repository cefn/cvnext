import { Immutable, Store, Watcher } from "@lauf/lauf-store";
import { ALL_ENTRIES } from "./data";
import { SCORENAMES } from "./score";
import { AppState, Entry, ScoreName } from "./types";
import { sortEntries } from "./util";

export const INITIAL_APPSTATE: Immutable<AppState> = {
  detail: "Full",
  scorePriority: SCORENAMES,
  limit: ALL_ENTRIES.length,
  priorityEntries: sortEntries(ALL_ENTRIES, SCORENAMES),
} as const;

export function ensurePriorityEntries(store: Store<AppState>) {
  let lastLimit = -1;
  let lastSortOrder: ReadonlyArray<ScoreName> = [];
  const limitWatcher: Watcher<Immutable<AppState>> = (state) => {
    console.log(state);
    const { limit, scorePriority } = state;
    if (limit !== lastLimit || scorePriority !== lastSortOrder) {
      lastLimit = limit;
      lastSortOrder = scorePriority;
      store.edit((draft) => {
        const priorityEntries = sortEntries(ALL_ENTRIES, scorePriority).slice(
          0,
          limit
        ) as Entry[]; //draft can't be immutable
        draft.priorityEntries = priorityEntries;
      });
    }
  };
  limitWatcher(store.read());
  store.watch(limitWatcher);
}
