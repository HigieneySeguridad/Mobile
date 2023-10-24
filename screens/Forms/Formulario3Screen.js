import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

class FormularioConCheckBox extends Component {
  state = {
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
  };

  handleSubmit = () => {
    const { checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox7, checkbox8, checkbox9, checkbox10 } = this.state;
    // Aquí puedes realizar acciones basadas en los valores de las casillas de verificación
    console.log('Opción 1:', checkbox1);
    console.log('Opción 2:', checkbox2);
    console.log('Opción 3:', checkbox3);
    console.log('Opción 4:', checkbox4);
    console.log('Opción 5:', checkbox5);
    console.log('Opción 6:', checkbox6);
    console.log('opción 7:', checkbox7);
    console.log('opción 8:', checkbox8);
    console.log('opción 9:', checkbox9);
    console.log('opción 10:', checkbox10);
  };

  render() {
    return (
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            Peligros y riesgos de trabajo
          </Text>
          <View style={styles.checkboxGroup}>
            <Text style={styles.checkboxTitle}>¿Fuentes de energías aisladas?</Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                title="Si"
                checked={this.state.checkbox1}
                containerStyle={styles.checkbox}
                textStyle={styles.checkboxText}
                onPress={() => this.setState({ checkbox1: !this.state.checkbox1 })}
              />
              <CheckBox
                title="No"
                checked={this.state.checkbox2}
                containerStyle={styles.checkbox}
                textStyle={styles.checkboxText}
                onPress={() => this.setState({ checkbox2: !this.state.checkbox2 })}
              />
              <CheckBox
                title="Na"
                checked={this.state.checkbox3}
                containerStyle={styles.checkbox}
                textStyle={styles.checkboxText}
                onPress={() => this.setState({ checkbox3: !this.state.checkbox3 })}
              />
            </View>
          </View>
          {/* Agrega más grupos de casillas de verificación según sea necesario */}
          <Button
            title="Enviar"
            onPress={this.handleSubmit}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  checkboxGroup: {
    marginBottom: 10,
    flexDirection: 'row', // Colocar título y checkboxes en una fila
    alignItems: 'center', // Centrar verticalmente
  },
  checkboxTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 10, // Espacio entre título y checkboxes
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    flexDirection: 'row', // Colocar checkboxes en una fila
    alignItems: 'center', // Centrar verticalmente los checkboxes
    marginLeft: -20, // Ajusta este valor para modificar el espacio entre los checkboxes
  },
  checkbox: {
    backgroundColor:"trasnparent",
    border: "none",
    marginRight:-8,
    width: 60, // Ajustar el ancho del contenedor de checkbox
  },
  checkboxText: {
    marginLeft:1,
    fontSize: 12, // Tamaño de texto más pequeño
  },
});

export default FormularioConCheckBox;
