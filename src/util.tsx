import React from 'react'
import { saveAs } from 'file-saver'
import { pdf } from '@react-pdf/renderer'
import { Immutable, Store } from '@lauf/lauf-store'
import {
  AppState,
  CATEGORIES,
  Category,
  Entry,
  ScoreName,
  Scorer,
  Tag
} from './types'
import { Resume } from './components'

export const LAUNCH_TIME = new Date().getTime()

export async function downloadPdf (store: Store<AppState>): Promise<void> {
  const blob = await pdf(<Resume store={store} />).toBlob()
  saveAs(blob, 'CV - Cefn Hoile.pdf')
}

export function getCategory (entry: Immutable<Entry>): Category | null {
  for (const tag of entry.tags) {
    for (const category of CATEGORIES) {
      if (tag === category) {
        return tag
      }
    }
  }
  return null
}

export function sortEntries (
  entries: Immutable<Entry[]>,
  scorePriority: Immutable<ScoreName[]>
): Array<Immutable<Entry>> {
  const sortedEntries: Array<Immutable<Entry>> = [...entries]
  sortedEntries.sort((a: Immutable<Entry>, b: Immutable<Entry>) => {
    for (const sort of scorePriority) {
      const scorer = SCORERS[sort]
      const diff = scorer(b) - scorer(a)
      if (diff !== 0) {
        return diff
      }
    }
    return 0
  })
  return sortedEntries
}

/** Scorer ensuring Entries dominate if they contain specific tags */
export function createTagsScorer (...tags: Tag[]): Scorer {
  return entry => {
    for (const tag of tags) {
      if (entry.tags.includes(tag)) {
        return 1
      }
    }
    return 0
  }
}

export const SCORERS: Record<ScoreName, Scorer> = {
  // boost: (entry) => entry.boost || 0,
  recency: entry => -(entry.stop ? LAUNCH_TIME - entry.stop.getTime() : 0), // Negative reverses order
  duration: entry => (entry.stop
    ? entry.stop.getTime() - entry.start.getTime()
    : LAUNCH_TIME - entry.start.getTime()),
  employment: createTagsScorer('employment'),
  education: createTagsScorer('education'),
  society: createTagsScorer('society'),
  coding: createTagsScorer('coding'),
  electronics: createTagsScorer('electronics'),
  management: createTagsScorer('management'),
  'machine learning': createTagsScorer('machine learning'),
  invention: createTagsScorer('invention'),
  design: createTagsScorer('design'),
  art: createTagsScorer('art'),
  sport: createTagsScorer('sport'),
  writing: createTagsScorer('writing')
} as const
