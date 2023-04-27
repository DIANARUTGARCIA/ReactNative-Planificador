import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

//Styles
import globalStyles from '../styles';
import {formatearCantidad} from '../helpers';
import CircularProgress from 'react-native-circular-progress-indicator';

const ControlPresupuesto = ({presupuesto, gastos, resetearApp}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0,
    );
    const totalDisponible = presupuesto - totalGastado;
    const nuevoPorcentaje =
      ((presupuesto - totalDisponible) / presupuesto) * 100;

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 2000);

    setGastado(totalGastado);
    setDisponible(totalDisponible);
  }, [gastos]);

  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <CircularProgress
          value={porcentaje}
          radius={150}
          duration={1000}
          valuePrefix={'%'}
          title="Gastado"
          inActiveStrokeColor="#F1ECFF"
          inActiveStrokeWidth={20}
          activeStrokeColor="#7541F0"
          activeStrokeWidth={20}
          titleColor="#64748B"
          titleStyle={{fontWeight: 'bold', fontSize: 20}}
        />
      </View>

      <View style={styles.contenedorTexto}>
        <Pressable style={styles.boton} onLongPress={resetearApp}>
          <Text style={styles.textoBoton}>Reiniciar App</Text>
        </Pressable>

        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto:{''} </Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible:{''} </Text>
          {formatearCantidad(disponible)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado:{''} </Text>
          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  centrarGrafica: {
    alignItems: 'center',
  },
  contenedorTexto: {
    marginTop: 50,
  },
  valor: {
    color: '#000',
    fontSize: 20,
    marginBottom: 10,
  },
  label: {
    color: '#3B82F6',
    fontWeight: '700',
  },
  boton: {
    backgroundColor: '#DB2777',
    pending: 10,
    marginBottom: 40,
    borderRadius: 15,
  },
  textoBoton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 10,
  },
});

export default ControlPresupuesto;
