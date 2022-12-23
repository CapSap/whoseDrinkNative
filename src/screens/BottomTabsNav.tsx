import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {HistoryScreen} from './HistoryScreen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNav: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="History" component={HistoryScreen} />
    </BottomTabs.Navigator>
  );
};
