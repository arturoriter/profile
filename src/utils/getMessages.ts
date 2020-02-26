import { Dictionary } from '../types/Dictionary';

import en from '../i18n/en.json';

const messages = { en };

export function getMessages(locale: 'en'): Dictionary<string> {
  return Object.assign({}, messages[locale]);
}
