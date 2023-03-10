import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../Screens/GetStarted/GetStarted'
import Home from '../Screens/Home/home';

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router