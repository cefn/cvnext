import { Immutable } from "@lauf/lauf-store";
import { sortEntries } from "../util";
import { ALL_ENTRIES } from "./data";

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
  limit: number;
  filteredEntries: Entry[];
  sortOrder: Sort[];
  detail: Detail;
}

export const DETAILS = {
  None: ["org"],
  Some: ["org", "title"],
  Most: ["org", "title", "intro"],
  All: ["org", "title", "intro", "body"],
} as const;
export type Detail = keyof typeof DETAILS;
export function getDetailLevel(detail: Detail) {
  return Object.keys(DETAILS).indexOf(detail);
}

export const CATEGORIES = ["employment", "education", "society"] as const;
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

export const DISCIPLINES = [
  "design",
  "invention",
  "management",
  "open source",
  "arts",
  "architecture",
  "coding",
  "testing",
  "CI/CD",
  "TDD",
  "BDD",
  "devops",
  "machine learning",
] as const;
export type Discipline = typeof DISCIPLINES[number];

export const TECHNOLOGIES = [
  "typescript",
  "javascript",
  "node",
  "python",
  "couchdb",
  "solr",
  "aws",
  "docker",
  "jest",
] as const;
export type Technology = typeof TECHNOLOGIES[number];

export const TAGS = [...CATEGORIES, ...DISCIPLINES, ...TECHNOLOGIES] as const;
export type Tag = typeof TAGS[number];

export const LAUNCH_TIME = new Date().getTime();

export const SORTS = ["boost", "recency", "duration", "category"] as const;
export type Sort = typeof SORTS[number];

/** Sort orders always numerical ascending by number */
export type Accessor = (entry: Immutable<Entry>) => number;
export const SORT_ACCESSORS: Record<Sort, Accessor> = {
  boost: (entry) => entry.boost || 0,
  recency: (entry) => -(entry.stop ? LAUNCH_TIME - entry.stop.getTime() : 0), //Negative to reverse order
  duration: (entry) =>
    entry.stop
      ? entry.stop.getTime() - entry.start.getTime()
      : LAUNCH_TIME - entry.start.getTime(),
  category: (entry) => {
    const category = getCategory(entry);
    if (category === null) {
      return 0;
    } else {
      return CATEGORIES.length - CATEGORIES.indexOf(category); //Negative to reverse order
    }
  },
} as const;

export const INITIAL_APPSTATE: Immutable<AppState> = {
  limit: Number.MAX_SAFE_INTEGER,
  filteredEntries: sortEntries(ALL_ENTRIES, SORTS),
  sortOrder: SORTS,
  detail: "All",
} as const;
