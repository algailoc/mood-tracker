import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, Store} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import {rootReducer} from './rootReducer';
import {RootAction, RootState} from './types';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  blacklist: [],
};

const persistedReducer = persistReducer<RootState, RootAction>(
  persistConfig,
  rootReducer,
);

export const store: Store<RootState, RootAction> =
  createStore(persistedReducer);
export const persistor = persistStore(store);
