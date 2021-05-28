export type Entry = {
  org: string;
  title: string;
  precedence?: number;
  tags: Tag[];
  start: Date;
  stop?: Date;
  intro?: string;
  body?: string;
};

export interface Profile {
  limit: number;
  limitedEntries: Entry[];
}

export const DETAILS = {
  None: ["org"],
  Some: ["org", "title"],
  Most: ["org", "title", "intro"],
  All: ["org", "title", "intro", "body"],
} as const;
export type Detail = keyof typeof DETAILS;

export const CATEGORIES = ["employment", "education", "society"] as const;
export type Category = typeof CATEGORIES[number];

export const SORTS = [
  "precedence",
  "recency",
  "duration",
  ...CATEGORIES,
] as const;
export type Sort = typeof SORTS[number];

export const DOMAINS = [
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
export type Domain = typeof DOMAINS[number];

export const TECHNOLOGIES = [
  "typescript",
  "javascript",
  "node",
  "python",
  "couchdb",
  "solr",
] as const;
export type Technology = typeof TECHNOLOGIES[number];

export const TAGS = [...CATEGORIES, ...DOMAINS, ...TECHNOLOGIES] as const;
export type Tag = typeof TAGS[number];

export const LAUNCH_TIME = new Date().getTime();

/** Sort orders always numerical ascending  */
export const SORT_ACCESSORS: Record<Sort, (entry: Entry) => number> = {
  precedence: (entry) => entry.precedence || 0,
  recency: (entry) => entry.start.getTime() - LAUNCH_TIME,
  duration: (entry) =>
    entry.stop
      ? entry.stop.getTime() - entry.start.getTime()
      : Number.MAX_SAFE_INTEGER,
  employment: (entry) => (entry.tags.includes("employment") ? 1 : 0),
  education: (entry) => (entry.tags.includes("education") ? 1 : 0),
  society: (entry) => (entry.tags.includes("society") ? 1 : 0),
};
