import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ea } from '../data/jogos/ea';
import { online } from '../data/jogos/online';
import { populares } from '../data/jogos/populares';
import FlatListGames from '../components/FlatListGames';
import Form from '../components/Form';

const Games = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Form />

      <ScrollView>
        <FlatListGames Titulo={'Jogos Online'} Dados={online} />
        <FlatListGames Titulo={'Electronic Arts'} Dados={ea} />
        <FlatListGames Titulo={'Mais populares'} Dados={populares} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'black',
  },
});
