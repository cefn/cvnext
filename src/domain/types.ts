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
  Minimum: ["org"],
  Title: ["org", "title"],
  Summary: ["org", "title", "intro"],
  Full: ["org", "title", "intro", "body"],
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

/** Sorting operator (for numerical scales ascending by number) */
export type Accessor = (entry: Immutable<Entry>) => number;

/** Accessor ensuring Entries dominate if they contain specific tags */
function createTagAccessor(...tags: Tag[]): Accessor {
  return (entry) => {
    for (const tag of tags) {
      if (entry.tags.includes(tag)) {
        return 1;
      }
    }
    return 0;
  };
}

export const SORTS = [
  // "boost",
  "recency",
  "duration",
  "employment",
  "education",
  "society",
  "coding",
  "electronics",
  "invention",
  "management",
  "machine learning",
  "art",
  "design",
  "sport",
  "writing",
] as const;
export type Sort = typeof SORTS[number];

export const SORT_ACCESSORS: Record<Sort, Accessor> = {
  // boost: (entry) => entry.boost || 0,
  recency: (entry) => -(entry.stop ? LAUNCH_TIME - entry.stop.getTime() : 0), //Negative reverses order
  duration: (entry) =>
    entry.stop
      ? entry.stop.getTime() - entry.start.getTime()
      : LAUNCH_TIME - entry.start.getTime(),
  employment: createTagAccessor("employment"),
  education: createTagAccessor("education"),
  society: createTagAccessor("society"),
  coding: createTagAccessor("coding"),
  electronics: createTagAccessor("electronics"),
  management: createTagAccessor("management"),
  "machine learning": createTagAccessor("machine learning"),
  invention: createTagAccessor("invention"),
  design: createTagAccessor("design"),
  art: createTagAccessor("art"),
  sport: createTagAccessor("sport"),
  writing: createTagAccessor("writing"),
} as const;

export const INITIAL_APPSTATE: Immutable<AppState> = {
  detail: "Full",
  sortOrder: SORTS,
  limit: ALL_ENTRIES.length,
  priorityEntries: sortEntries(ALL_ENTRIES, SORTS),
} as const;
