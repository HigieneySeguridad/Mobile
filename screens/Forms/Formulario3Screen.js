import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

class FormularioConCheckBox extends Component {
  state = {
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
  };

  handleSubmit = () => {
    const { checkbox38, checkbox39, checkbox40, checkbox41, checkbox42, checkbox43, checkbox44, checkbox45, checkbox46, checkbox47, checkbox48, checkbox49, checkbox50, checkbox51, checkbox52, checkbox53, checkbox54, checkbox55, checkbox56, checkbox57, checkbox58, checkbox59, checkbox60, checkbox61, checkbox62, checkbox63, checkbox64 } = this.state;
    // Aquí puedes realizar acciones basadas en los valores de las casillas de verificación
    console.log('Opción 1:', checkbox38);
    console.log('Opción 2:', checkbox39);
    console.log('Opción 3:', checkbox40);
    console.log('Opción 4:', checkbox41);
    console.log('Opción 5:', checkbox42);
    console.log('Opción 6:', checkbox43);
    console.log('opción 7:', checkbox44);
    console.log('opción 8:', checkbox45);
    console.log('opción 9:', checkbox46);
    console.log('opción 10:', checkbox47);
    console.log('opción 11:', checkbox48);
    console.log('opción 12:', checkbox49);
    console.log('opción 13:', checkbox50);
    console.log('opción 14:', checkbox51);
    console.log('opción 15:', checkbox52);
    console.log('opción 16:', checkbox53);
    console.log('opción 17:', checkbox54);
    console.log('opción 18:', checkbox55);
    console.log('opción 19:', checkbox56);
    console.log('opción 20:', checkbox57);
    console.log('opción 21:', checkbox58);
    console.log('opción 22:', checkbox59);
    console.log('opción 23:', checkbox60);
    console.log('opción 24:', checkbox61);
    console.log('opción 25:', checkbox62);
    console.log('opción 26:', checkbox63);
    console.log('opción 27:', checkbox64);

  };

  render() {
    return (
      <ScrollView>
        <View style={{ padding: 10}}>
         <Text style={{ fontSize: 22,
            fontWeight: 'bold',
            backgroundColor: 'orange',
            padding: 10,
            textAlign: 'center',
            color: 'white' ,
            }}>
            Requisitos para ingresar a espacios confinados
          </Text>
          <Text style={styles.titulo }>
            ¿Fuentes de energías aisladas? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={this.state.checkbox38}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox38: !this.state.checkbox38 })}
            />
            <CheckBox
              title="No"
              checked={this.state.checkbox39}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox39: !this.state.checkbox39 })}
            />
            <CheckBox
              title="NA"
              checked={this.state.checkbox40}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox40: !this.state.checkbox40 })}
            />
            
          </View>
          <Text style={styles.titulo }>
          ¿Estan la entradas y salidas de fluidos con aislamiento positivo? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={this.state.checkbox41}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox41: !this.state.checkbox41 })}
            />
            <CheckBox
              title="No"
              checked={this.state.checkbox42}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox42: !this.state.checkbox42 })}
            />
            <CheckBox
              title="NA"
              checked={this.state.checkbox43}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox43: !this.state.checkbox43 })}
            />
             </View>
          <Text style={styles.titulo }>
          ¿Se cuenta con elemento de iluminación para atmósfera explosiva? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={this.state.checkbox44}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox44: !this.state.checkbox44 })}
            />
            <CheckBox
              title="No"
              checked={this.state.checkbox45}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox45: !this.state.checkbox45 })}
            />
            <CheckBox
              title="NA"
              checked={this.state.checkbox46}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox46: !this.state.checkbox46 })}
            />
             </View>
          <Text style={styles.titulo }>
          ¿Se cuenta con elemento de ventilación forzada? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={this.state.checkbox47}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox47: !this.state.checkbox47 })}
            />
            <CheckBox
              title="No"
              checked={this.state.checkbox48}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox48: !this.state.checkbox48 })}
            />
            <CheckBox
              title="NA"
              checked={this.state.checkbox49}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox49: !this.state.checkbox49 })}
            />
             </View>
          <Text style={styles.titulo }>
          ¿Se requiere protección respiratoria? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={this.state.checkbox50}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox50: !this.state.checkbox50 })}
            />
            <CheckBox
              title="No"
              checked={this.state.checkbox51}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox51: !this.state.checkbox51 })}
            />
            <CheckBox
              title="NA"
              checked={this.state.checkbox52}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox52: !this.state.checkbox52 })}
            />
             </View>
          <Text style={styles.titulo }>
          ¿Elementos de rescate? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={this.state.checkbox53}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox53: !this.state.checkbox53 })}
            />
            <CheckBox
              title="No"
              checked={this.state.checkbox54}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox54: !this.state.checkbox54 })}
            />
            <CheckBox
              title="NA"
              checked={this.state.checkbox55}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox55: !this.state.checkbox55 })}
            />
             </View>
          <Text style={styles.titulo }>
          ¿Elementos de rescate? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={this.state.checkbox56}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox56: !this.state.checkbox56 })}
            />
            <CheckBox
              title="No"
              checked={this.state.checkbox57}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox57: !this.state.checkbox57 })}
            />
            <CheckBox
              title="NA"
              checked={this.state.checkbox58}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox58: !this.state.checkbox58 })}
            />
             </View>
          <Text style={styles.titulo }>
          ¿Hay personal de relevo para quien/es entra/an? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={this.state.checkbox59}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox59: !this.state.checkbox59 })}
            />
            <CheckBox
              title="No"
              checked={this.state.checkbox60}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox60: !this.state.checkbox60 })}
            />
            <CheckBox
              title="NA"
              checked={this.state.checkbox61}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox61: !this.state.checkbox61 })}
            />
             </View>
          <Text style={styles.titulo }>
          ¿Evaluación de riesgo para el ingreso? .
          </Text>
          <View style={styles.checkboxGroup}>
            <CheckBox
              title="Si"
              checked={this.state.checkbox62}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox62: !this.state.checkbox62 })}
            />
            <CheckBox
              title="No"
              checked={this.state.checkbox63}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox63: !this.state.checkbox63 })}
            />
            <CheckBox
              title="NA"
              checked={this.state.checkbox64}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              onPress={() => this.setState({ checkbox64: !this.state.checkbox64 })}
            />
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
    flexDirection: 'row', // Colocar las casillas de verificación en una fila
    alignItems: 'center', // Centrar verticalmente
  },
  checkbox: {
    backgroundColor: "transparent",
    border: "none",
    width: 110, // Ajustar el ancho del contenedor de checkbox
  },
  checkboxText: {
    marginLeft: 5,
    fontSize: 16, // Tamaño de texto más pequeño
  },
  titulo:{
    fontSize: 17, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    textAlign: 'center' 
  }
});

export default FormularioConCheckBox;
