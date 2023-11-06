import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Boton = ({ apretame, text = 'Botón' }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={apretame}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Centra el texto horizontalmente
  },
  btn: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: 150,
    marginLeft: 105,
  },
});

export default Boton;
