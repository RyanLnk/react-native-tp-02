import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Form from '../components/Form';

const Apps = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Form />
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
