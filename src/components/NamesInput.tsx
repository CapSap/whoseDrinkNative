import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

type MateItemProps = {
  item: string;
};

const Mate: React.FC<MateItemProps> = ({item}) => {
  return (
    <View style={styles.mateContainer}>
      <Text style={styles.mate}>{item}</Text>
    </View>
  );
};

export const NamesInput: React.FC = () => {
  const [userName, setuserName] = useState('');
  const [mates, setMates] = useState([
    'FlatList',
    'StyleSheet',
    'Text',
    'TextInput',
    'TouchableOpacity',
    'View',
    'SafeAreaView',
    'FlatList',
    'StyleSheet',
    'Text',
    'TextInput',
    'TouchableOpacity',
    'View',
    'SafeAreaView',
    'FlatList',
    'StyleSheet',
    'Text',
    'TextInput',
    'TouchableOpacity',
    'View',
    'SafeAreaView',
  ]);

  return (
    <View>
      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={
            <View>
              <Text>Your Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={newText => setuserName(newText)}
                placeholder="Your name"
                defaultValue={userName}
              />
              <Text>Your Mates (use a comma to seperate names)</Text>
              <TextInput
                style={styles.input}
                onChangeText={newText => setMates(newText.split(','))}
                placeholder="Your mates"
                defaultValue={mates.toString()}
              />
            </View>
          }
          ListFooterComponent={
            <TouchableOpacity style={styles.button}>
              <Text>Save</Text>
            </TouchableOpacity>
          }
          data={mates}
          renderItem={Mate}
          keyExtractor={(item, index) => item + index}
        />
      </View>
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
  mateContainer: {
    margin: 10,
  },
  mate: {
    padding: 5,
    fontSize: 20,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  flatListContainer: {},
});
