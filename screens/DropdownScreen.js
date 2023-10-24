
import { View, Text,Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";

const DropdownScreen = () => {
  const navigation = useNavigation();
  const options = [
    { label: 'Permiso de trabajo en frio.', value: 'Formulario1Screen' },
    { label: 'Permiso de trabajo en caliente.', value: 'Formulario2Screen' },
    { label: 'Permiso de trabajo en espacio confinado.', value: 'Formulario3Screen' }
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const navigateToSelectedScreen = () => {
    const selectedScreen = options.find((option) => option.value === selectedOption);
    if (selectedScreen) {
      navigation.navigate(selectedScreen.value);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

export default DropdownScreen;