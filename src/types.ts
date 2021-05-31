import { Immutable } from "@lauf/lauf-store";
import { CATEGORIES, DISCIPLINES, TAGS, TECHNOLOGIES } from "./data";
import { DETAILS } from "./components/Resume";
import { SCORENAMES } from "./score";

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
  scorePriority: ScoreName[];
  limit: number;
  priorityEntries: Entry[];
}

export type Detail = keyof typeof DETAILS;

export type Tag = typeof TAGS[number];
export type Discipline = typeof DISCIPLINES[number];
export type Technology = typeof TECHNOLOGIES[number];
export type Category = typeof CATEGORIES[number];

/** Score operator (defines numerical scales ascending by number) */
export type Scorer = (entry: Immutable<Entry>) => number;
export type ScoreName = typeof SCORENAMES[number];
