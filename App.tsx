import * as React from 'react';
import { store } from './store';
import { Provider, useSelector } from 'react-redux';
import ThemeRedux from './ThemeRedux';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeRedux />
    </Provider>
  );
}
