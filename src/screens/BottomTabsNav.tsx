import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {HistoryScreen} from './HistoryScreen';
import {RoundRecorder} from './RoundRecorder';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNav: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Profile" component={HomeScreen} />
      <BottomTabs.Screen name="Record Round" component={RoundRecorder} />
      <BottomTabs.Screen name="History" component={HistoryScreen} />
    </BottomTabs.Navigator>
  );
};
