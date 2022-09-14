import React from 'react';
import './App.css';
import { WidgetProvider } from './components/context';
import Widget from './components';

const App = () => (
  <WidgetProvider>
    <Widget />
  </WidgetProvider>
);

export default App;
