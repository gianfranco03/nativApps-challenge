import * as RNLocalize from "react-native-localize";
import i18n from 'i18n-js';

import en from './languages/en';
import es from './languages/es';

const getLanguage = (): string => {
  const locales = RNLocalize.getLocales();
  return locales && locales.length > 0 ? locales[0].languageCode : "en";
}

i18n.fallbacks = true;
i18n.translations = { en, es };
i18n.locale = getLanguage();

export default i18n;