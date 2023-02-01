import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './Routes/router'

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}