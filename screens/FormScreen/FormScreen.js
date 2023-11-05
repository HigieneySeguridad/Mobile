import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './FormScreenStyles';

const FormScreen = () => {
  const navigation = useNavigation();
  const options = [
    { label: 'Permiso de trabajo en frio', value: 'Form1' },
    { label: 'Permiso de trabajo en caliente', value: 'Form2' },
    { label: 'Permiso de trabajo en espacio confinado', value: 'Form3' },
    { label: 'Prueba de atmosfera', value: 'Form4' },  
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
      <Text>Selecciona una opción:</Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
        style={{ width: 400 }}
      >
        {options.map((option) => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
      <Button
        title="Ir a la opción seleccionada"
        onPress={navigateToSelectedScreen}
      />
    </View>
  );
};




export default FormScreen;
