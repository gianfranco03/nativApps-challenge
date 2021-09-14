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

const en: AppTexts = {
  homeTab: 'Home',
  aboutTab: 'About',
  ...HomeText,
};

export default en;
