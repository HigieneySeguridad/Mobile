import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

class FormularioConCheckBox extends Component {
  state = {
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
  };

  render() {
    return (
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 25,
            fontWeight: 'bold',
            backgroundColor: 'red',
            padding: 10,
            textAlign: 'center',}}>
            Peligros y riesgos de trabajo
          </Text>
          <CheckBox
            title="LLama abierta o arco."
            checked={this.state.checkbox21}
            onPress={() => this.setState({ checkbox21: !this.state.checkbox21 })}
          />
          <CheckBox
            title="Acceso al sitio."
            checked={this.state.checkbox22}
            onPress={() => this.setState({ checkbox22: !this.state.checkbox22 })}
          />
          <CheckBox
            title="Sustancias químicas."
            checked={this.state.checkbox23}
            onPress={() => this.setState({ checkbox23: !this.state.checkbox23 })}
          />
          <CheckBox
            title="Trabajo en equipos funcionando."
            checked={this.state.checkbox24}
            onPress={() => this.setState({ checkbox24: !this.state.checkbox24 })}
          />
          <CheckBox
            title="Trabajo en altura."
            checked={this.state.checkbox25}
            onPress={() => this.setState({ checkbox25: !this.state.checkbox25 })}
          />
          <CheckBox
            title="Uso de herramientas eléctricas."
            checked={this.state.checkbox26}
            onPress={() => this.setState({ checkbox26: !this.state.checkbox26 })}
          />
          <CheckBox
            title="Uso de herramientas neumática."
            checked={this.state.checkbox27}
            onPress={() => this.setState({ checkbox27: !this.state.checkbox27 })}
          />
          <CheckBox
            title="Potencial de derrame."
            checked={this.state.checkbox28}
            onPress={() => this.setState({ checkbox28: !this.state.checkbox28 })}
          />
          <CheckBox
            title="Sistema bajo presión."
            checked={this.state.checkbox29}
            onPress={() => this.setState({ checkbox29: !this.state.checkbox29 })}
          />
           <Text style={{ fontSize: 25,
            fontWeight: 'bold',
            backgroundColor: 'green',
            padding: 10,
            textAlign: 'center',}}>
            Precauciones a tomar
          </Text>
          <CheckBox
          title="LLenar equipo con agua."
            checked={this.state.checkbox30}
            onPress={() => this.setState({ checkbox30: !this.state.checkbox30 })}
            />
          <CheckBox
            title="Equipo/área libre de combustible."
            checked={this.state.checkbox31}
            onPress={() => this.setState({ checkbox31: !this.state.checkbox31 })}
          />
          <CheckBox
            title="Comunicación permanente."
            checked={this.state.checkbox32}
            onPress={() => this.setState({ checkbox32: !this.state.checkbox32 })}
          />
          <CheckBox
            title="Protección de incendio."
            checked={this.state.checkbox33}
            onPress={() => this.setState({ checkbox33: !this.state.checkbox33 })}
          />
          <CheckBox
            title="Aislamiento Mecánico."
            checked={this.state.checkbox34}
            onPress={() => this.setState({ checkbox34: !this.state.checkbox34 })}
          />
          <CheckBox
            title="Aislamiento Eléctrico."
            checked={this.state.checkbox35}
            onPress={() => this.setState({ checkbox35: !this.state.checkbox35 })}
          />
          <CheckBox
            title="Desprezurización y drenaje."
            checked={this.state.checkbox36}
            onPress={() => this.setState({ checkbox36: !this.state.checkbox36 })}
          />
          <CheckBox
            title="Señalización de área."
            checked={this.state.checkbox37}
            onPress={() => this.setState({ checkbox37: !this.state.checkbox37 })}
          />
          <Button
          title="Enviar"
          onPress={this.handleSubmit}
        />
        </View>
      </ScrollView>
    );
  }
}

export default FormularioConCheckBox;
