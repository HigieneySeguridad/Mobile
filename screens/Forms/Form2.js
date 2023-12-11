import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Form2 = () => {
  const [checkboxState, setCheckboxState] = useState({
    checkbox21: false,
    checkbox22: false,
    checkbox23: false,
    checkbox24: false,
    checkbox25: false,
    checkbox26: false,
    checkbox27: false,
    checkbox28: false,
    checkbox29: false,
    checkbox30: false,
    checkbox31: false,
    checkbox32: false,
    checkbox33: false,
    checkbox34: false,
    checkbox35: false,
    checkbox36: false,
    checkbox37: false,
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
        <Text style={styles.titulogrande1}>
          Peligros y riesgos de trabajo
        </Text>
        <View style={styles.CheckBoxCont}>
          <CheckBox
            title="LLama abierta o arco."
            checked={checkboxState.checkbox21}
            onPress={() => handleCheckboxPress('checkbox21')}
          />
           <CheckBox
            title="Acceso al sitio."
            checked={checkboxState.checkbox22}
            onPress={() => handleCheckboxPress('checkbox22')}
          />
           <CheckBox
            title="Sustancias químicas."
            checked={checkboxState.checkbox23}
            onPress={() => handleCheckboxPress('checkbox23')}
          />
           <CheckBox
            title="Trabajo en equipos funcionando."
            checked={checkboxState.checkbox24}
            onPress={() => handleCheckboxPress('checkbox24')}
          />
           <CheckBox
            title="Trabajo en altura."
            checked={checkboxState.checkbox25}
            onPress={() => handleCheckboxPress('checkbox25')}
          />
           <CheckBox
            title="Uso de herramientas eléctricas."
            checked={checkboxState.checkbox26}
            onPress={() => handleCheckboxPress('checkbox26')}
          />
           <CheckBox
            title="Uso de herramientas neumática."
            checked={checkboxState.checkbox27}
            onPress={() => handleCheckboxPress('checkbox27')}
          />
           <CheckBox
            title="Potencial de derrame."
            checked={checkboxState.checkbox28}
            onPress={() => handleCheckboxPress('checkbox28')}
          />
           <CheckBox
            title="Sistema bajo presión."
            checked={checkboxState.checkbox29}
            onPress={() => handleCheckboxPress('checkbox29')}
          />
        </View>
        <Text style={styles.titulogrande2}>Precauciones a tomar</Text>
        <View style={styles.CheckBoxCont}>
        <CheckBox
            title="LLenar equipo con agua."
            checked={checkboxState.checkbox30}
            onPress={() => handleCheckboxPress('checkbox30')}
          />
           <CheckBox
            title="Equipo/área libre de combustible."
            checked={checkboxState.checkbox21}
            onPress={() => handleCheckboxPress('checkbox31')}
          />
           <CheckBox
            title="Comunicación permanente."
            checked={checkboxState.checkbox21}
            onPress={() => handleCheckboxPress('checkbox32')}
          />
           <CheckBox
            title="Protección de incendio."
            checked={checkboxState.checkbox21}
            onPress={() => handleCheckboxPress('checkbox33')}
          />
           <CheckBox
            title="Aislamiento Mecánico."
            checked={checkboxState.checkbox21}
            onPress={() => handleCheckboxPress('checkbox34')}
          />
           <CheckBox
            title="Aislamiento Eléctrico."
            checked={checkboxState.checkbox21}
            onPress={() => handleCheckboxPress('checkbox35')}
          />
           <CheckBox
            title="Desprezurización y drenaje."
            checked={checkboxState.checkbox21}
            onPress={() => handleCheckboxPress('checkbox36')}
          />
           <CheckBox
            title="Señalización de área."
            checked={checkboxState.checkbox21}
            onPress={() => handleCheckboxPress('checkbox37')}
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
  contenedor: {
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

export default Form2;
