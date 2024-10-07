
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtab from '../bottomNavigation';
import Splace from '../../screens/splaceScreen';
import Searchscreen from '../../screens/searchScreen';
import ChatScreen from '../../screens/ChatScreen';
type RootStackParamList = {
  splace: undefined;
  bottom: undefined;
  Search: undefined;
  Chat: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Rootnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splace">
        <Stack.Screen
          name="splace"
          component={Splace}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="bottom"
          component={Bottomtab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Searchscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rootnavigation;

