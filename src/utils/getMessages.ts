import { Dictionary } from '../types/Dictionary';

import en from '../i18n/en.json';

export function getMessages(locale: 'en'): Dictionary<string> {
  if (locale === 'en') {
    return Object.assign({}, en);
  }

  return Object.assign({}, en);
}
