import { paperType, fontsConfigType } from "./types";

const fontFamily: string = 'Poppins';
const fontWeight: string = 'normal';

const paperFontsConfig: paperType = {
  regular: {
    fontFamily: `${fontFamily}`,
    fontWeight,
  },
  medium: {
    fontFamily: `${fontFamily}-Medium`,
    fontWeight,
  },
  light: {
    fontFamily: `${fontFamily}-Light`,
    fontWeight,
  },
  thin: {
    fontFamily: `${fontFamily}-Thin`,
    fontWeight,
  },
};

export const fontsConfig: fontsConfigType = {
  web: paperFontsConfig,
  ios: paperFontsConfig,
  android: paperFontsConfig,
};
