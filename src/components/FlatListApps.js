import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const FlatListApps = ({ Titulo, Dados }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{Titulo}</Text>
      <FlatList
        data={Dados}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity activeOpacity={0.5}>
              <Image style={styles.image} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
            <Text style={styles.titulo}>{item.nome}</Text>
          </View>
        )}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FlatListApps;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  header: {
    fontSize: 22,
    color: '#d1d5d8',
    marginHorizontal: 5,
    marginVertical: 13,
  },
  image: {
    height: 150,
    width: 150,
  },
  titulo: {
    height: 35,
    width: 93,
    color: '#d1d5d8',
  },
  separador: {
    width: 15,
  },
});
