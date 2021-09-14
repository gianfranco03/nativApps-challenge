import {AppTexts} from '../type';

const HomeText = {
  homeTitle: 'NativApps Tech Challenge',
  homeSubTite1: 'Movies with ',
  homeSubTite2: 'title of year ',
  homeItemType: 'Type: ',
  homeItemYear: 'Year: ',
  homeErrorFetch: 'Something went wrong. Try again',
  homeAcceptButton: 'Try again',
  homeNoData: 'No movies found.',
};

const AboutText = {
  aboutTitle: 'Prueba Técnica Desarrollo Híbrido - NativeApps',
  aboutUS: 'US: ',
  aboutName: 'Name: ',
  aboutLink: 'Repository link',
};

const en: AppTexts = {
  homeTab: 'Home',
  aboutTab: 'About',
  ...HomeText,
  ...AboutText,
};

export default en;
