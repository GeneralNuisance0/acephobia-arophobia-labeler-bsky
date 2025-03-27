import { Label } from './types.js';

export const DELETE = 'insert-rkey-of-delete-post-here';
export const LABEL_LIMIT = 1;
export const LABELS: Label[] = [
  {
    rkey: 'insert-rkey-here',
    identifier: 'acephobia',
    locales: [
      { lang: 'en', name: 'Acephobia (general)', description: 'Post/account label. Posts labelled acephobic demonstrate a generally acephobic stance. Repetitive or severe acephobia may result in an account label. For public figures/celebrities, acephobic comments made off-site may result in a label.'}
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'arophobia',
    locales: [
      { lang: 'en', name: 'Arophobia', description: 'Post/account label. Posts and users may be labeled by this for content that isn\'t neccesarily acephobic, but definitely arophobic in nature, as there is heavy overlap between the two. Repeat and severe offenders will get an account label.'}
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'ace-exclusionism',
    locales: [
      { lang: 'en', name: 'Ace/Aro Exclusionism', description: 'Post/account label. Posts with this label demonstrate an exclusionary stance, such as deeming sex-favourable aces, or aces and aros who politically align with sex positivity as not being \'real\' aces/aros.'}
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'ableism',
    locales: [
      { lang: 'en', name: 'Ableism Crossover Episode', description: 'Post label for aro/acephobia that specifically also targets disabled people.'}
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'coopt',
    locales: [
      { lang: 'en', name: 'Co-Opters', description: 'Users co-opting ace/arophobia when criticized for misogyny, transphobia, etc.'}
    ]
  },
];
