import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './FormScreenStyles';
import { TextInput } from "react-native-gesture-handler";

const FormScreen = () => {
  const navigation = useNavigation();
  const options = [
    { label: 'Permiso de trabajo en frio', value: 'Form1' },
    { label: 'Permiso de trabajo en caliente', value: 'Form2' },
    { label: 'Permiso de trabajo en espacio confinado', value: 'Form3' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const navigateToSelectedScreen = () => {
    const selectedScreen = options.find((option) => option.value === selectedOption);
    if (selectedScreen) {
      // Muestra una alerta con el nombre de la opción seleccionada
      Alert.alert('Estas por entrar a', selectedScreen.label, [
        { text: 'OK', onPress: () => navigation.navigate(selectedScreen.value) },
      ]);
    }
  };

  const handleEnviar = () => {
    // Aquí puedes realizar acciones adicionales antes de mostrar la alerta
    // ...

    // Muestra la alerta de "Enviado"
    Alert.alert('Enviado', 'El formulario ha sido enviado correctamente.', [
      { text: 'OK', onPress: () => navigation.navigate('OperarioScreen') }, // Reemplaza 'OtraPagina' con el nombre de la página a la que quieras redirigirte
    ]);
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
      
      <TouchableOpacity TouchableOpacity style={styles.btn2} onPress={handleEnviar}>
        <Text style={styles.btnText2}> Enviar </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('OperarioScreen')}>
        <Text style={styles.btnText1}> Volver </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormScreen;
