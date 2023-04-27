import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Gasto from './Gasto';

const ListadoGastos = ({gastos}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>GASTOS</Text>
      {gastos.length === 0 ? (
        <Text style={styles.noGastos}>No hay gastos</Text>
      ) : (
        gastos.map(gasto => <Gasto key={gasto.id} gasto={gasto} />)
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    marginVertical: 70,
    marginBottom: 100,
  },
  titulo: {
    fontSize: 30,
    color: '#64748B',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20,
  },
  noGastos: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ListadoGastos;
