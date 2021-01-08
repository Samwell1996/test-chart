import { persistStore, persistCombineReducers } from 'redux-persist';
import { compose, applyMiddleware, createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import appReducer from './modules';
import Reactotron from '../ReactotronConfig';

const config = {
  key: 'root',
  whitelist: ['viewer'],
  storage: AsyncStorage,
};

const reducer = persistCombineReducers(config, appReducer);

const enhancer = compose(Reactotron.createEnhancer(), applyMiddleware(thunk));

const store = createStore(reducer, undefined, enhancer);

export let persist = null;

export const createPersist = () =>
  new Promise(res => {
    persist = persistStore(store, {}, res);
  });

export default store;
