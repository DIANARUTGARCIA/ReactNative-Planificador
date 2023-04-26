import React from 'react';
import {Pressable, Text, TextInput, View, StyleSheet} from 'react-native';

const NuevoPresupuesto = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Definir Presupuestos</Text>
      <TextInput
        keyboardType="numeric"
        placeholderTextColor="#C1C1C1"
        placeholder="Agrega tu presupuesto"
        style={styles.input}
      />
      <Pressable style={styles.boton}>
        <Text style={styles.botonTexto}>Agregar presupuesto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    marginHorizontal: 10,

    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    transform: [{translateY: 50}],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
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
