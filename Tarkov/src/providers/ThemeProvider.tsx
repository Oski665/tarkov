import React from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ThemeColorType} from '../utils/typesUtils';
import {ASYNC_STORAGE_KEY_SCHEME} from '../Labels';

import {lightThemeColors, darkThemeColors} from '../styles/colors';

export const ThemeContext = React.createContext({
  isDark: false,
  colors: lightThemeColors,
  changeScheme: () => {},
} as {
  isDark: boolean;
  colors: ThemeColorType;
  changeScheme: (scheme: 'dark' | 'light') => void;
});

type Props = {
  children: JSX.Element;
};

const ThemeProvider: React.FC<Props> = props => {
  const systemColorScheme = useColorScheme();

  const [isDark, setIsDark] = React.useState(systemColorScheme === 'dark');

  const _changeScheme = async (scheme: 'dark' | 'light') => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEY_SCHEME, scheme);

      setIsDark(scheme === 'dark');
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    const _checkScheme = async () => {
      const storageScheme = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEY_SCHEME,
        undefined,
      );

      if (storageScheme) {
        setIsDark(storageScheme === 'dark');
        return;
      }
      setIsDark(systemColorScheme === 'dark');
    };

    _checkScheme();
  }, [systemColorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        colors: isDark ? darkThemeColors : lightThemeColors,
        isDark,
        changeScheme: _changeScheme,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
