import { ui, defaultLang, type Lang } from './ui';

/**
 * Extract the language from the current URL.
 * `/en/projects` → 'en'
 * `/projects`    → 'es' (default)
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Return a translated string for a given key and language.
 */
export function t(key: string, lang: Lang = defaultLang): string {
  return ui[lang][key] ?? ui[defaultLang][key] ?? key;
}

/**
 * Build a localized path.
 * For the default locale ('es') the prefix is omitted:
 *   localePath('/projects', 'es') → '/projects'
 *   localePath('/projects', 'en') → '/en/projects'
 */
export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean}`;
}

/**
 * Get the alternate language.
 */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
