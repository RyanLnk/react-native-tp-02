import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { populares } from '../data/filmes/populares';
import { recomendados } from '../data/filmes/recomendados';
import { estreias } from '../data/filmes/estreias';
import FlatListFilmes from '../components/FlatListFilmes';
import Form from '../components/Form';

const Movies = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Form />
      <ScrollView>
        <FlatListFilmes
          Titulo={'Os 100 filmes mais populares'}
          Dados={populares}
        />
        <FlatListFilmes
          Titulo={'Estreias antecipadas e mais'}
          Dados={estreias}
        />
        <FlatListFilmes
          Titulo={'Recomendações para você'}
          Dados={recomendados}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'black',
  },
});
