import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomTabsNav} from './screens/BottomTabsNav';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNav />
    </NavigationContainer>
  );
};

export default App;
