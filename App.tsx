import React from 'react';
// import {SafeAreaView, Text} from 'react-native';
// import {getFontFamily} from './assets/fonts/helper';
import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
