export const locales = ['en', 'ro', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ro: 'Română',
  de: 'Deutsch',
};

export const localeFlags: Record<Locale, string> = {
  en: 'EN',
  ro: 'RO',
  de: 'DE',
};
