import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { entretenimento } from '../data/apps/entretenimento';
import { sugestoes } from '../data/apps/sugestoes';
import { populares } from '../data/apps/populares';
import FlatListApps from '../components/FlatListApps';
import Form from '../components/Form';

const Apps = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Form />

      <ScrollView>
        <FlatListApps Titulo={'Entretenimento'} Dados={entretenimento} />
        <FlatListApps Titulo={'Sugestões para você'} Dados={sugestoes} />
        <FlatListApps Titulo={'Apps Populares'} Dados={populares} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Apps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'black',
  },
});
