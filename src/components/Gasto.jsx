import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import globalStyles from '../styles';

const Gasto = ({gasto}) => {
  const {nombre, categoria, id} = gasto;
  return (
    <View style={styles.contenedor}>
      <Text>{nombre} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 30,
    color: '#64748B',
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default Gasto;
