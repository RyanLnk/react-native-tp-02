import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Form = () => {
  const [textoInput, setTextoInput] = useState();

  return (
    <View style={styles.searchSection}>
      <Icon style={styles.searchIcon} name="search" size={27} color="white" />
      <TextInput
        autoCorrect={false}
        style={styles.input}
        placeholder="Pesquisar por aplicativos e jogos"
        placeholderTextColor="white"
        value={textoInput}
        onChangeText={setTextoInput}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F4F4F',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
    backgroundColor: '#4F4F4F',
    color: 'white',
  },
});
