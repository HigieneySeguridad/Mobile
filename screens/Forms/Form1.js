import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { CheckBox, Button,  } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Form1 = () => {
  const [checkboxState, setCheckboxState] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false,
    checkbox13: false,
    checkbox14: false,
    checkbox15: false,
    checkbox16: false,
    checkbox17: false,
    checkbox18: false,
    checkbox19: false,
    checkbox20: false,
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
      <View style={styles.contendor}>
        <Text style={styles.titulogrande1}>
          Peligros y riesgos de trabajo
        </Text>
        <View style={styles.CheckBoxCont}>
          <CheckBox
            title="Líquidos y gases inflamables."
            checked={checkboxState.checkbox1}
            onPress={() => handleCheckboxPress('checkbox1')}
          />
          <CheckBox
            title="Sustancias químicas."
            checked={checkboxState.checkbox2}
            onPress={() => handleCheckboxPress('checkbox2')}
          />
          <CheckBox
            title="Trabajo en equipos funcionando."
            checked={checkboxState.checkbox3}
            onPress={() => handleCheckboxPress('checkbox3')}
          />
          <CheckBox
            title="Trabajo en altura."
            checked={checkboxState.checkbox4}
            onPress={() => handleCheckboxPress('checkbox4')}
          />
          <CheckBox
            title="Potencial de derrame."
            checked={checkboxState.checkbox5}
            onPress={() => handleCheckboxPress('checkbox5')}
          />
          <CheckBox
            title="Uso de herramientas eléctricas."
            checked={checkboxState.checkbox6}
            onPress={() => handleCheckboxPress('checkbox6')}
          />
          <CheckBox
            title="Uso de herramientas neumáticas."
            checked={checkboxState.checkbox7}
            onPress={() => handleCheckboxPress('checkbox7')}
          />
          <CheckBox
            title="Sistema bajo presión."
            checked={checkboxState.checkbox8}
            onPress={() => handleCheckboxPress('checkbox8')}
          />
          <CheckBox
            title="Movimiento de cargas pesadas."
            checked={checkboxState.checkbox9}
            onPress={() => handleCheckboxPress('checkbox9')}
          />
          <CheckBox
            title="Otros."
            checked={checkboxState.checkbox10}
            onPress={() => handleCheckboxPress('checkbox10')}
          />
        </View>
        <Text style={styles.titulogrande2}>Precauciones a tomar</Text>
        <View style={styles.CheckBoxCont}>
        <CheckBox
            title="Aislamiento Mecánico."
            checked={checkboxState.checkbox11}
            onPress={() => handleCheckboxPress('checkbox11')}
          />
          <CheckBox
            title="Aislamiento Eléctrico."
            checked={checkboxState.checkbox12}
            onPress={() => handleCheckboxPress('checkbox12')}
          />
          <CheckBox
            title="Aislamiento del proceso."
            checked={checkboxState.checkbox13}
            onPress={() => handleCheckboxPress('checkbox13')}
          />
          <CheckBox
            title="Aislamiento Sistema de seguridad."
            checked={checkboxState.checkbox14}
            onPress={() => handleCheckboxPress('checkbox14')}
          />
          <CheckBox
            title="Comunicación permanente."
            checked={checkboxState.checkbox15}
            onPress={() => handleCheckboxPress('checkbox15')}
          />
          <CheckBox
            title="Plan de izaje."
            checked={checkboxState.checkbox16}
            onPress={() => handleCheckboxPress('checkbox16')}
          />
          <CheckBox
            title="Desprezurización y drenaje."
            checked={checkboxState.checkbox17}
            onPress={() => handleCheckboxPress('checkbox17')}
          />
          <CheckBox
            title="Instalación de protección."
            checked={checkboxState.checkbox18}
            onPress={() => handleCheckboxPress('checkbox18')}
          />
          <CheckBox
            title="Señalización de área."
            checked={checkboxState.checkbox19}
            onPress={() => handleCheckboxPress('checkbox19')}
          />
          <CheckBox
            title="Protección de incendio."
            checked={checkboxState.checkbox20}
            onPress={() => handleCheckboxPress('checkbox20')}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('FormScreen')}>
        <Text style={styles.btnText}> Guardar </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  CheckBoxCont: {
    width: 394,
    marginLeft: -10,
  },
  titulogrande1: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 10,
    textAlign: 'center',
    color: 'white',
  },
  titulogrande2: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'green',
    padding: 10,
    textAlign: 'center',
    color: 'white',
  },
  contendor: {
    padding: 10,
    top: 35,
  },
  btnText: {
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

export default Form1;
