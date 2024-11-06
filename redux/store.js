import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import User from './reducers/User';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import {version} from 'react';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
    //.concat(logger);
  },
});

export default store;

export const persistor = persistStore(store);
