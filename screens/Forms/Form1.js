import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

class Form1 extends Component {
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
  };

  handleSubmit = () => {
    const { checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox7, checkbox8, checkbox9, checkbox10, checkbox11, checkbox12, checkbox13, checkbox14, checkbox15, checkbox16, checkbox17, checkbox18, checkbox19, checkbox20 } = this.state;
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
    console.log('opción 11:', checkbox11);
    console.log('opción 12:', checkbox12);
    console.log('opción 13:', checkbox13);
    console.log('opción 14:', checkbox14);
    console.log('opción 15:', checkbox15);
    console.log('opción 16:', checkbox16);
    console.log('opción 17:', checkbox17);
    console.log('opción 18:', checkbox18);
    console.log('opción 19:', checkbox19);
    console.log('opción 20:', checkbox20);
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.contendor}>
          <Text style={styles.titulogrande1}>
            Peligros y riesgos de trabajo
          </Text>
          <View style={styles.CheckBoxCont}>
          <CheckBox
            title="Líquidos y gases inflamables."
            checked={this.state.checkbox1}
            onPress={() => this.setState({ checkbox1: !this.state.checkbox1 })}
          />
          <CheckBox
            title="Sustancias químicas."
            checked={this.state.checkbox2}
            onPress={() => this.setState({ checkbox2: !this.state.checkbox2 })}
          />
          <CheckBox
            title="Trabajo en equipos funcionando."
            checked={this.state.checkbox3}
            onPress={() => this.setState({ checkbox3: !this.state.checkbox3 })}
          />
          <CheckBox
            title="Trabajo en altura."
            checked={this.state.checkbox4}
            onPress={() => this.setState({ checkbox4: !this.state.checkbox4 })}
          />
          <CheckBox
            title="Potencial de derrame."
            checked={this.state.checkbox5}
            onPress={() => this.setState({ checkbox5: !this.state.checkbox5 })}
          />
          <CheckBox
            title="Uso de herramientas eléctricas."
            checked={this.state.checkbox6}
            onPress={() => this.setState({ checkbox6: !this.state.checkbox6 })}
          />
          <CheckBox
            title="Uso de herramientas neumáticas."
            checked={this.state.checkbox7}
            onPress={() => this.setState({ checkbox7: !this.state.checkbox7 })}
          />
          <CheckBox
            title="Sistema bajo presión."
            checked={this.state.checkbox8}
            onPress={() => this.setState({ checkbox8: !this.state.checkbox8 })}
          />
          <CheckBox
            title="Movimiento de cargas pesadas."
            checked={this.state.checkbox9}
            onPress={() => this.setState({ checkbox9: !this.state.checkbox9 })}
          />
          <CheckBox
            title="Otros."
            checked={this.state.checkbox10}
            onPress={() => this.setState({ checkbox10: !this.state.checkbox10 })}
          />
          </View>
           <Text style={styles.titulogrande2}>
            Precauciones a tomar
          </Text>
          <View style={styles.CheckBoxCont}>
          <CheckBox
          title="Aislamiento Mecánico."
            checked={this.state.checkbox11}
            onPress={() => this.setState({ checkbox11: !this.state.checkbox11 })}
            />
          <CheckBox
            title="Aislamiento Eléctrico."
            checked={this.state.checkbox12}
            onPress={() => this.setState({ checkbox12: !this.state.checkbox12 })}
          />
          <CheckBox
            title="Aislamiento del proceso."
            checked={this.state.checkbox13}
            onPress={() => this.setState({ checkbox13: !this.state.checkbox13 })}
          />
          <CheckBox
            title="Aislamiento Sistema de seguridad."
            checked={this.state.checkbox14}
            onPress={() => this.setState({ checkbox14: !this.state.checkbox14 })}
          />
          <CheckBox
            title="Comunicación permanente."
            checked={this.state.checkbox15}
            onPress={() => this.setState({ checkbox15: !this.state.checkbox15 })}
          />
          <CheckBox
            title="Plan de izaje."
            checked={this.state.checkbox16}
            onPress={() => this.setState({ checkbox16: !this.state.checkbox16 })}
          />
          <CheckBox
            title="Desprezurización y drenaje."
            checked={this.state.checkbox17}
            onPress={() => this.setState({ checkbox17: !this.state.checkbox17 })}
          />
          <CheckBox
            title="Instalación de protección."
            checked={this.state.checkbox18}
            onPress={() => this.setState({ checkbox8: !this.state.checkbox18 })}
          />
          <CheckBox
            title="Señalización de área."
            checked={this.state.checkbox19}
            onPress={() => this.setState({ checkbox19: !this.state.checkbox19 })}
          />
          <CheckBox
            title="Protección de incendio."
            checked={this.state.checkbox20}
            onPress={() => this.setState({ checkbox20: !this.state.checkbox20 })}
          />
          <Button
          title="Enviar"
          onPress={this.handleSubmit}
        />
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  CheckBoxCont: {
    width: 394 ,
    marginLeft: -10,
  },
  titulogrande1:{
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 10,
    textAlign: 'center',
    color: 'white',
  },
  titulogrande2:{
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'green',
    padding: 10,
    textAlign: 'center',
    color: 'white',
  },
  contendor:{
    padding: 10,
  }
});

export default Form1;