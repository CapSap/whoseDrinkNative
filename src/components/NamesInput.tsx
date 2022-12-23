import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

export const NamesInput: React.FC = () => {
  const [userName, setuserName] = useState('');
  return (
    <View>
      <Text>Your Name</Text>
      <TextInput
        onChangeText={newText => setuserName(newText)}
        placeholder="asddasdasdsadasads name"
        defaultValue={userName}
      />
    </View>
  );
};
