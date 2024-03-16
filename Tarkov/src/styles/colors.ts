import {ThemeColorType} from '../utils/typesUtils';

const NEUTRAL_900 = '#0C0F12';
const NEUTRAL_100 = '#F3F5F8';
const NEUTRAL_000 = '#FFF';

const BRAND_900 = '#172449';
const BRAND_200 = '#E9F3FF';

const black = '#1f1f1f';

const gray500 = '#6B7280';
const gray50 = '#C8D6EB';
const gray300 = '#D1D5DB';
const gray100 = '#F3F4F6';
const gray200 = '#E5E7EB';
const gray400 = '#9CA3AF';

export const lightThemeColors: ThemeColorType = {
  primaryBackgroundColor: NEUTRAL_100,
  primaryTextColor: NEUTRAL_900,
  primaryColor: BRAND_900,
  whiteColor: NEUTRAL_000,
  blackColor: black,

  navigationCardColor: NEUTRAL_000,
  navigationBorderColor: NEUTRAL_100,
  navigationNotificationColor: BRAND_200,

  gray400: gray400,
  gray500: gray500,
  gray50: gray50,
  gray300: gray300,
  gray100: gray100,
  gray200: gray200,
};

export const darkThemeColors: ThemeColorType = {
  primaryBackgroundColor: NEUTRAL_100,
  primaryTextColor: NEUTRAL_900,
  primaryColor: BRAND_900,
  whiteColor: NEUTRAL_000,
  blackColor: black,

  navigationCardColor: NEUTRAL_000,
  navigationBorderColor: NEUTRAL_100,
  navigationNotificationColor: BRAND_200,

  gray400: gray400,
  gray500: gray500,
  gray50: gray50,
  gray300: gray300,
  gray100: gray100,
  gray200: gray200,
};
