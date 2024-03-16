import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import {ThemeContext} from './ThemeProvider';

export const NavigationContext = React.createContext({
  navigationScreenName: '',
} as {
  navigationScreenName: string | undefined;
});

type Props = {
  children: JSX.Element;
};

const NavigationProvider: React.FC<Props> = ({children}) => {
  const navigationRef = useNavigationContainerRef();

  const {colors, isDark} = React.useContext(ThemeContext);

  const [currentScreenName, setCurrentScreenName] = React.useState<
    string | undefined
  >('');

  return (
    <NavigationContext.Provider
      value={{
        navigationScreenName: currentScreenName,
      }}>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={() => {
          if (navigationRef.getCurrentRoute()?.name) {
            const currentRouteName = navigationRef.getCurrentRoute()?.name;
            setCurrentScreenName(currentRouteName);
          }
        }}
        theme={{
          dark: isDark,
          colors: {
            primary: colors.primaryColor,
            background: colors.primaryBackgroundColor,
            card: colors.navigationCardColor,
            text: colors.primaryTextColor,
            border: colors.navigationBorderColor,
            notification: colors.navigationNotificationColor,
          },
        }}>
        {children}
      </NavigationContainer>
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
