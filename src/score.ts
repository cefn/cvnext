import { ScoreName, Scorer } from "./types";
import { createTagsScorer, LAUNCH_TIME } from "./util";

export const SCORENAMES = [
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

export const SCORERS: Record<ScoreName, Scorer> = {
  // boost: (entry) => entry.boost || 0,
  recency: (entry) => -(entry.stop ? LAUNCH_TIME - entry.stop.getTime() : 0), //Negative reverses order
  duration: (entry) =>
    entry.stop
      ? entry.stop.getTime() - entry.start.getTime()
      : LAUNCH_TIME - entry.start.getTime(),
  employment: createTagsScorer("employment"),
  education: createTagsScorer("education"),
  society: createTagsScorer("society"),
  coding: createTagsScorer("coding"),
  electronics: createTagsScorer("electronics"),
  management: createTagsScorer("management"),
  "machine learning": createTagsScorer("machine learning"),
  invention: createTagsScorer("invention"),
  design: createTagsScorer("design"),
  art: createTagsScorer("art"),
  sport: createTagsScorer("sport"),
  writing: createTagsScorer("writing"),
} as const;
