import React from 'react';
import {View} from 'react-native';
import {NamesInput} from '../components/NamesInput';
import {RoundRecorder} from '../components/RoundRecorder';

export const HomeScreen: React.FC = () => {
  return (
    <View>
      <NamesInput />
      <RoundRecorder />
    </View>
  );
};
