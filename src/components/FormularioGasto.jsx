import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
//Styles
import globalStyles from '../styles';

const FormularioGasto = ({
  setModal,
  handleGasto,
  setGasto,
  gasto,
  eliminarGasto,
}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [id, setId] = useState('');
  const [fecha, setfecha] = useState('');

  useEffect(() => {
    //Verificar si hay gastos
    if (gasto?.id) {
      setNombre(gasto.nombre);
      setCantidad(gasto.cantidad);
      setCategoria(gasto.categoria);
      setId(gasto.id);
      setfecha(gasto.fecha);
    }
  }, [gasto]);

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.contenedorBotones}>
        <Pressable
          style={[styles.btn,styles.btnCancelar]}
          onLongPress={() => {
            setModal(false);
            setGasto({});
          }}
        >
          <Text style={styles.btnTexto}>Cancelar</Text>
        </Pressable>

        {!!id && (
          <Pressable
          style={[styles.btn,styles.btnEliminar]}
          onLongPress={()=>eliminarGasto(id)}
        >
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>

        )}

      </View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>
          {' '}
          {gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}
        </Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del gasto ej.comida"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad Gastos</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad del gasto ej.comida"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={setCantidad}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Categoría Gastos</Text>
          <Picker
            style={styles.input}
            selectedValue={categoria}
            onValueChange={valor => {
              setCategoria(valor);
            }}
          >
            <Picker.Item label="--Seleccione--" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Gastos Varios" value="gastos" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscripciones" value="suscripciones" />
          </Picker>
        </View>
        <Pressable
          style={styles.submitBtn}
          onPress={() =>
            handleGasto({
              nombre,
              cantidad,
              categoria,
              id,
              fecha,
            })
          }
        >
          <Text style={styles.submitBtnTexto}>
            {gasto?.nombre ? 'Guardar Cambios Gasto' : 'Agregar Gasto'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#2F8CF2',
    flex: 1,
  },
  formulario: {
    ...globalStyles.contenedor,
    marginHorizontal: 15,
  },

  titulo: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    color: '#64748B',
  },
  campo: {
    marginVertical: 10,
  },
  label: {
    color: '#64748B',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    color: '#000',
  },
  submitBtnTexto: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  submitBtn: {
    backgroundColor: '#3B82f6',
    padding: 10,
    marginTop: 20,
  },
  btn:{
     padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
    flex:1,
  },
  btnEliminar:{
    backgroundColor: '#F22FA4',
  },
  btnCancelar: {
    backgroundColor: '#F22FA4',
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  contenedorBotones:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
});

export default FormularioGasto;
