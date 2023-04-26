import React, {useState} from 'react';
import {Pressable, Text, TextInput, View, StyleSheet} from 'react-native';
//Styles
import globalStyles from '../styles';
const NuevoPresupuesto = ({
  handleNuevoPresupuesto,
  setPresupuesto,
  presupuesto,
}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Definir Presupuestos</Text>
      <TextInput
        keyboardType="numeric"
        placeholderTextColor="#C1C1C1"
        placeholder="Agrega tu presupuesto"
        style={styles.input}
        value={presupuesto.toString()}
        onChangeText={setPresupuesto}
      />
      <Pressable
        onPress={() => handleNuevoPresupuesto(presupuesto)}
        style={styles.boton}
      >
        <Text style={styles.botonTexto}>Agregar presupuesto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  label: {
    color: '#3B82F6',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 30,
    backgroundColor: '#EDECEC',
    color: '#000',
  },
  boton: {
    marginTop: 30,
    backgroundColor: '#1048A4',
    padding: 10,
    borderRadius: 15,
  },
  botonTexto: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default NuevoPresupuesto;
