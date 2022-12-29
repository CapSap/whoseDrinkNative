import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const NamesInput: React.FC = () => {
  const [userName, setuserName] = useState('');

  return (
    <View>
      <Text>Your Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={newText => setuserName(newText)}
        placeholder="Your name"
        defaultValue={userName}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
