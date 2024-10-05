import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Images from '../../assets';
import HomeScreen from '../../screens/homeScreen';

const Tab = createBottomTabNavigator();

const Bottomtab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          switch (route.name) {
            case 'Home':
              iconName = Images.home;
              break;
            case 'ACCOUNT':
              iconName = Images.account;
              break;
            case 'FAVORITES':
              iconName = Images.favorites;
              break;
            case 'MENU':
              iconName = Images.menu;
              break;
            default:
              iconName = Images.menu;
          }

          return (
            <Image
              source={iconName}
              style={{ width: 20, height: 20, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: '#46A4BA',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="ACCOUNT" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="FAVORITES" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="MENU" component={HomeScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default Bottomtab;
