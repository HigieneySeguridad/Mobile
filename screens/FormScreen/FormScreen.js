import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './FormScreenStyles';
import { TextInput } from "react-native-gesture-handler";
import SignatureScreen from 'react-native-signature-canvas';

const FormScreen = () => {
  const navigation = useNavigation();
  const options = [
    { label: 'Permiso de trabajo en frio', value: 'Form1' },
    { label: 'Permiso de trabajo en caliente', value: 'Form2' },
    { label: 'Permiso de trabajo en espacio confinado', value: 'Form3' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);
/*   const navigateToSelectedScreen = () => {
    const selectedScreen = options.find((option) => option.value === selectedOption);
    if (selectedScreen) {
      // Simplemente muestra una alerta con el nombre de la opción seleccionada
      Alert.alert('Opción seleccionada', selectedScreen.label);
    } */

  const navigateToSelectedScreen = () => {
    navigation.navigate(selectedOption);  // Utiliza el valor seleccionado directamente

    // Opcional: Puedes verificar si el valor es válido antes de navegar
    // const selectedScreen = options.find((option) => option.value === selectedOption);
    // if (selectedScreen) {
    //   navigation.navigate(selectedScreen.value);
    // }
  };

  return (
    
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo1}> Permiso de Trabajo </Text>
        <TextInput 
          style={styles.input}
          placeholder="Descripción del Trabajo"
          placeholderTextColor="black"
        />
        <TextInput 
          style={styles.input}
          placeholder="N° de Personas"
          placeholderTextColor="black"
        />
        <TextInput 
          style={styles.input}
          placeholder="Herramientas y Equipos"
          placeholderTextColor="black"
        />
      </View>
      <Text>Selecciona una opción:</Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
        style={styles.drop}
      >
        {options.map((option) => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
      <Button
        title="Ir a la opción seleccionada"
        onPress={navigateToSelectedScreen}
      />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OperarioScreen')}>
        <Text style={styles.btnText}> Volver </Text>
      </TouchableOpacity>

    </View>
  );
};




export default FormScreen;
