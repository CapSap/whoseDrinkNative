import React from 'react';
import {Text, View} from 'react-native';
import {NamesInput} from './components/NamesInput';
import {RoundRecorder} from './components/RoundRecorder';

const App: React.FC = () => {
  return (
    <View>
      <NamesInput />
      <RoundRecorder />
    </View>
  );
};

export default App;
