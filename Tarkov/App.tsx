import React from 'react';
import {ApolloProvider} from '@apollo/client';
import 'react-native-gesture-handler';

import client from './apollo/apolloClient';
import {NavigationProvider, ThemeProvider} from './src/providers';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        {/* <View
          style={{justifyContent: 'center', alignItems: 'flex-start', flex: 1}}>
          <ItemsList />
        </View> */}
        <NavigationProvider>
          <MainNavigator />
        </NavigationProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
