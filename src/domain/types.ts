import { Immutable } from "@lauf/lauf-store";
import { sortEntries } from "../util";
import {
  ALL_ENTRIES,
  CATEGORIES,
  DISCIPLINES,
  TAGS,
  TECHNOLOGIES,
} from "./data";

export type Entry = {
  org: string;
  title: string;
  tags: Tag[];
  start: Date;
  stop?: Date;
  intro?: string;
  body?: string;
  boost?: number;
};

export interface AppState {
  detail: Detail;
  sortOrder: Sort[];
  limit: number;
  priorityEntries: Entry[];
}

export const DETAILS = {
  None: ["org"],
  Some: ["org", "title"],
  Most: ["org", "title", "intro"],
  All: ["org", "title", "intro", "body"],
} as const;
export type Detail = keyof typeof DETAILS;

export type Tag = typeof TAGS[number];
export type Discipline = typeof DISCIPLINES[number];
export type Technology = typeof TECHNOLOGIES[number];
export type Category = typeof CATEGORIES[number];
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

export const LAUNCH_TIME = new Date().getTime();

export const SORTS = ["boost", "recency", "duration", "category"] as const;
export type Sort = typeof SORTS[number];

/** Sort orders always numerical ascending by number */
export type Accessor = (entry: Immutable<Entry>) => number;
export const SORT_ACCESSORS: Record<Sort, Accessor> = {
  boost: (entry) => entry.boost || 0,
  recency: (entry) => -(entry.stop ? LAUNCH_TIME - entry.stop.getTime() : 0), //Negative reverses order
  duration: (entry) =>
    entry.stop
      ? entry.stop.getTime() - entry.start.getTime()
      : LAUNCH_TIME - entry.start.getTime(),
  category: (entry) => {
    const category = getCategory(entry);
    if (category === null) {
      return 0;
    } else {
      return CATEGORIES.length - CATEGORIES.indexOf(category); //Negative reverses order
    }
  },
} as const;

export const INITIAL_APPSTATE: Immutable<AppState> = {
  detail: "All",
  sortOrder: SORTS,
  limit: ALL_ENTRIES.length,
  priorityEntries: sortEntries(ALL_ENTRIES, SORTS),
} as const;
