import { Immutable } from "@lauf/lauf-store";
import { ENGAGEMENTS } from "./data";

export type Engagement = {
    title: string;
    subtitle: string;
    tags: Tag[];
    start: Date;
    stop?: Date;
    description?: string;
  };
  
  export type Tag = typeof TAGS[number];
  export type Domain = typeof DOMAINS[number];
  export type Technology = typeof TECHNOLOGIES[number];
  export type Category = typeof CATEGORIES[number];


export interface Profile {
    limit: number;
    limitedEngagements: Engagement[];
  }
  
  export const CATEGORIES = ["employment", "education", "society"] as const;

export const DOMAINS = [
  "design",
  "invention",
  "enterprise",
  "open source",
  "arts",
  "software architecture",
  "software development",
  "software testing",
  "continuous integration",
  "artificial intelligence",
] as const;

export const TECHNOLOGIES = [
  "typescript",
  "javascript",
  "node",
  "python",
  "couchdb",
  "solr",
] as const;

export const TAGS = [...CATEGORIES, ...DOMAINS, ...TECHNOLOGIES] as const;
