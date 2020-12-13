import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View, StatusBar } from 'react-native';
import store, { createPersist } from './store/createStore';
import { appOperations } from './store/modules/app';
import { colors } from './styles';
import * as Screen from './screens';

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
  },
  text: {
    color: colors.textPrimary,
  },
});

const App = () => {
  useEffect(() => {
    async function asyncPersist() {
      await createPersist(store);
      store.dispatch(appOperations.init());
    }
    asyncPersist();
  }, []);

  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <Screen.Home />
      </Provider>
    </View>
  );
};

export default App;
