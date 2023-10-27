import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

function Formulario() {
  const [hora, setHora] = useState('');
  const [oxigeno, setOxigeno] = useState('');
  const [combustible, setCombustible] = useState('');
  const [h2s, setH2s] = useState ('');
  const [otro, setOtro] = useState ('');

  const handleSubmit = () => {
    console.log('Hora:', hora);
    console.log('Oxígeno:', oxigeno);
    console.log('Combustible:', combustible);
    console.log('H2S:', h2s);
    console.log('Otro:', otro);
  };

  return (
    <View style={{padding: 10}}>
      <Text style={{textAlign: 'center', fontSize: 20}}> Hora </Text>
      <TextInput
        placeholder="Hora"
        value={hora}
        onChangeText={(text) => setHora(text)}
      />
      <Text style={{textAlign: 'center', fontSize: 20}}> Oxígeno 19.5-22.5% </Text>
      <TextInput
        placeholder="Oxígeno"
        value={oxigeno}
        onChangeText={(text) => setOxigeno(text)}
      />
      <Text style={{textAlign: 'center', fontSize: 22}}> Combustible LEL .0% </Text>
      <TextInput
        placeholder="Combustible"
        value={combustible}
        onChangeText={(text) => setCombustible(text)}
      />
      <Text style={{textAlign: 'center', fontSize: 22}}> H2S </Text>
      <TextInput
        placeholder="H2S"
        value={h2s}
        onChangeText={(text) => setH2s(text)}
      />
      <Text style={{textAlign: 'center', fontSize: 22}}> Otro </Text>
      <TextInput
        placeholder="Otro"
        value={otro}
        onChangeText={(text) => setOtro(text)}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

export default Formulario;
