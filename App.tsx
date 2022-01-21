import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Layout} from './lib/presentation/components/common/Layout';
import {persistor, store} from './lib/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Layout />
      </PersistGate>
    </Provider>
  );
};

export default App;
