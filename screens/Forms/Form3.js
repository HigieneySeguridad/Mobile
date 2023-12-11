import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Form3 = () => {
  const [checkboxState, setCheckboxState] = useState({
    checkbox38: false,
    checkbox39: false,
    checkbox40: false,
    checkbox41: false,
    checkbox42: false,
    checkbox43: false,
    checkbox44: false,
    checkbox45: false,
    checkbox46: false,
    checkbox47: false,
    checkbox48: false,
    checkbox49: false,
    checkbox50: false,
    checkbox51: false,
    checkbox52: false,
    checkbox53: false,
    checkbox54: false,
    checkbox55: false,
    checkbox56: false,
    checkbox57: false,
    checkbox58: false,
    checkbox59: false,
    checkbox60: false,
    checkbox61: false,
    checkbox62: false,
    checkbox63: false,
    checkbox64: false,
    // ... (otros checkboxes)
  });

  const navigation = useNavigation();

  const handleCheckboxPress = (checkboxName) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  const handleSubmit = () => {
    // Aquí puedes realizar acciones basadas en los valores de las casillas de verificación
    console.log('Estado de las casillas de verificación:', checkboxState);

    // Después de manejar la lógica del envío, vuelve a la página anterior
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.contenedor}>
        <Text style={styles.titulogrande}>
          Requisitos para ingresar a espacios confinados
        </Text>
        <View style={styles.ConteinerDatos}>
          <Text style={styles.titulo}>
            ¿Fuentes de energías aisladas? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={checkboxState.checkbox38}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox38')}
            />
            <CheckBox
              title="No"
              checked={checkboxState.checkbox39}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox39')}
            />
            <CheckBox
              title="NA"
              checked={checkboxState.checkbox40}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox40')}
            />
          </View>
        </View>
        <View style={styles.ConteinerDatos}>
          <Text style={styles.titulo}>
            ¿Estan la entradas y salidas de fluidos con aislamiento positivo? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={checkboxState.checkbox41}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox41')}
            />
            <CheckBox
              title="No"
              checked={checkboxState.checkbox42}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox42')}
            />
            <CheckBox
              title="NA"
              checked={checkboxState.checkbox43}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox43')}
            />
          </View>
        </View>
        <View style={styles.ConteinerDatos}>
          <Text style={styles.titulo}>
            ¿Se cuenta con elemento de iluminación para atmósfera explosiva? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={checkboxState.checkbox44}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox44')}
            />
            <CheckBox
              title="No"
              checked={checkboxState.checkbox45}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox45')}
            />
            <CheckBox
              title="NA"
              checked={checkboxState.checkbox46}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox46')}
            />
          </View>
        </View>
        <View style={styles.ConteinerDatos}>
          <Text style={styles.titulo}>
            ¿Se cuenta con elemento de ventilación forzada? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={checkboxState.checkbox47}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox47')}
            />
            <CheckBox
              title="No"
              checked={checkboxState.checkbox48}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox48')}
            />
            <CheckBox
              title="NA"
              checked={checkboxState.checkbox49}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox49')}
            />
          </View>
        </View>
        <View style={styles.ConteinerDatos}>
          <Text style={styles.titulo}>
            ¿Se requiere protección respiratoria? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={checkboxState.checkbox50}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox50')}
            />
            <CheckBox
              title="No"
              checked={checkboxState.checkbox51}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox51')}
            />
            <CheckBox
              title="NA"
              checked={checkboxState.checkbox52}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox52')}
            />
          </View>
        </View>
        <View style={styles.ConteinerDatos}>
          <Text style={styles.titulo}>
            ¿Elementos de rescate? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={checkboxState.checkbox53}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox53')}
            />
            <CheckBox
              title="No"
              checked={checkboxState.checkbox54}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox54')}
            />
            <CheckBox
              title="NA"
              checked={checkboxState.checkbox55}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox55')}
            />
          </View>
        </View>
        <View style={styles.ConteinerDatos}>
          <Text style={styles.titulo}>
            ¿Hay personal de relevo para quien/es entra/an? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={checkboxState.checkbox56}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox56')}
            />
            <CheckBox
              title="No"
              checked={checkboxState.checkbox57}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox57')}
            />
            <CheckBox
              title="NA"
              checked={checkboxState.checkbox58}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox58')}
            />
          </View>
        </View>
        <View style={styles.ConteinerDatos}>
          <Text style={styles.titulo}>
            ¿Evaluación de riesgo para el ingreso? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={checkboxState.checkbox59}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox59')}
            />
            <CheckBox
              title="No"
              checked={checkboxState.checkbox60}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox60')}
            />
            <CheckBox
              title="NA"
              checked={checkboxState.checkbox61}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox61')}
            />
          </View>
        </View>
        <View style={styles.ConteinerDatos}>
          <Text style={styles.titulo}>
            ¿Fuentes de energías aisladas? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={checkboxState.checkbox62}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox62')}
            />
            <CheckBox
              title="No"
              checked={checkboxState.checkbox63}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox63')}
            />
            <CheckBox
              title="NA"
              checked={checkboxState.checkbox64}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => handleCheckboxPress('checkbox64')}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('FormScreen')}>
        <Text style={styles.btnText}> Guardar </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  checkboxGroup: {
    marginBottom: 10,
    flexDirection: 'row', // Colocar las casillas de verificación en una fila
    alignItems: 'center', // Centrar verticalmente
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    border: "none",
    width: 110, // Ajustar el ancho del contenedor de checkbox
  },
  checkboxText: {
    marginLeft: 5,
    fontSize: 16, // Tamaño de texto más pequeño
    color: '#40AAE5',
  },
  titulo:{
    fontSize: 17, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    textAlign: 'center',
    color: '#40AAE5', 
  },
   ConteinerDatos: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  contenedor:{
    padding: 10,
    top: 35,
  },
  titulogrande:{
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'orange',
    padding: 10,
    textAlign: 'center',
    color: 'white' ,
  },btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  btn: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    width: 335,
    top: -13,
  },
});

export default Form3; 

