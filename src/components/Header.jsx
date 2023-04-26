import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={styles.texto}>Planificador de Gastos</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    fontWeight: '700',
    paddingTop: 20,
    textTransform: 'uppercase',
  },
});

export default Header;
