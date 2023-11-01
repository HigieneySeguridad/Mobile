import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

function Formulario() {
  const [hora, setHora] = useState('');
  const [oxigeno, setOxigeno] = useState('');
  const [combustible, setCombustible] = useState('');
  const [h2s, setH2s] = useState('');
  const [otro, setOtro] = useState('');
  const [formularioVisible, setFormularioVisible] = useState(false);

  const handleSubmit = () => {
    console.log('Hora:', hora);
    console.log('Oxígeno:', oxigeno);
    console.log('Combustible:', combustible);
    console.log('H2S:', h2s);
    console.log('Otro:', otro);
  };

  return (
    <View style={styles.contenedor}>
      <Button title="Mostrar acuifero guarani" onPress={() => setFormularioVisible(!formularioVisible)} />
      {formularioVisible && (
        <View>
          <Text style={styles.titulo}> Hora </Text>
          <TextInput
            placeholder="Hora"
            value={hora}
            onChangeText={(text) => setHora(text)}
          />
          <Text style={styles.titulo}> Oxígeno 19.5-22.5% </Text>
          <TextInput
            placeholder="Oxígeno"
            value={oxigeno}
            onChangeText={(text) => setOxigeno(text)}
          />
          <Text style={styles.titulo}> Combustible LEL .0% </Text>
          <TextInput
            placeholder="Combustible"
            value={combustible}
            onChangeText={(text) => setCombustible(text)}
          />
          <Text style={styles.titulo}> H2S </Text>
          <TextInput
            placeholder="H2S"
            value={h2s}
            onChangeText={(text) => setH2s(text)}
          />
          <Text style={styles.titulo}> Otro </Text>
          <TextInput
            placeholder="Otro"
            value={otro}
            onChangeText={(text) => setOtro(text)}
          />
        </View>
      )}
      <Button title="Mostrar acuifero guarani" onPress={() => setFormularioVisible(!formularioVisible)} />
      {formularioVisible && (
        <View>
          <Text style={styles.titulo}> Hora </Text>
          <TextInput
            placeholder="Hora"
            value={hora}
            onChangeText={(text) => setHora(text)}
          />
          <Text style={styles.titulo}> Oxígeno 19.5-22.5% </Text>
          <TextInput
            placeholder="Oxígeno"
            value={oxigeno}
            onChangeText={(text) => setOxigeno(text)}
          />
          <Text style={styles.titulo}> Combustible LEL .0% </Text>
          <TextInput
            placeholder="Combustible"
            value={combustible}
            onChangeText={(text) => setCombustible(text)}
          />
          <Text style={styles.titulo}> H2S </Text>
          <TextInput
            placeholder="H2S"
            value={h2s}
            onChangeText={(text) => setH2s(text)}
          />
          <Text style={styles.titulo}> Otro </Text>
          <TextInput
            placeholder="Otro"
            value={otro}
            onChangeText={(text) => setOtro(text)}
          />
        </View>
      )}
      <Button title="Mostrar acuifero guarani" onPress={() => setFormularioVisible(!formularioVisible)} />
      {formularioVisible && (
        <View>
          <Text style={styles.titulo}> Hora </Text>
          <TextInput
            placeholder="Hora"
            value={hora}
            onChangeText={(text) => setHora(text)}
          />
          <Text style={styles.titulo}> Oxígeno 19.5-22.5% </Text>
          <TextInput
            placeholder="Oxígeno"
            value={oxigeno}
            onChangeText={(text) => setOxigeno(text)}
          />
          <Text style={styles.titulo}> Combustible LEL .0% </Text>
          <TextInput
            placeholder="Combustible"
            value={combustible}
            onChangeText={(text) => setCombustible(text)}
          />
          <Text style={styles.titulo}> H2S </Text>
          <TextInput
            placeholder="H2S"
            value={h2s}
            onChangeText={(text) => setH2s(text)}
          />
          <Text style={styles.titulo}> Otro </Text>
          <TextInput
            placeholder="Otro"
            value={otro}
            onChangeText={(text) => setOtro(text)}
          />
        </View>
      )}
      <Button title="Mostrar acuifero guarani" onPress={() => setFormularioVisible(!formularioVisible)} />
      {formularioVisible && (
        <View>
          <Text style={styles.titulo}> Hora </Text>
          <TextInput
            placeholder="Hora"
            value={hora}
            onChangeText={(text) => setHora(text)}
          />
          <Text style={styles.titulo}> Oxígeno 19.5-22.5% </Text>
          <TextInput
            placeholder="Oxígeno"
            value={oxigeno}
            onChangeText={(text) => setOxigeno(text)}
          />
          <Text style={styles.titulo}> Combustible LEL .0% </Text>
          <TextInput
            placeholder="Combustible"
            value={combustible}
            onChangeText={(text) => setCombustible(text)}
          />
          <Text style={styles.titulo}> H2S </Text>
          <TextInput
            placeholder="H2S"
            value={h2s}
            onChangeText={(text) => setH2s(text)}
          />
          <Text style={styles.titulo}> Otro </Text>
          <TextInput
            placeholder="Otro"
            value={otro}
            onChangeText={(text) => setOtro(text)}
          />
        </View>
      )}
      <Button title="Mostrar acuifero guarani" onPress={() => setFormularioVisible(!formularioVisible)} />
      {formularioVisible && (
        <View>
          <Text style={styles.titulo}> Hora </Text>
          <TextInput
            placeholder="Hora"
            value={hora}
            onChangeText={(text) => setHora(text)}
          />
          <Text style={styles.titulo}> Oxígeno 19.5-22.5% </Text>
          <TextInput
            placeholder="Oxígeno"
            value={oxigeno}
            onChangeText={(text) => setOxigeno(text)}
          />
          <Text style={styles.titulo}> Combustible LEL .0% </Text>
          <TextInput
            placeholder="Combustible"
            value={combustible}
            onChangeText={(text) => setCombustible(text)}
          />
          <Text style={styles.titulo}> H2S </Text>
          <TextInput
            placeholder="H2S"
            value={h2s}
            onChangeText={(text) => setH2s(text)}
          />
          <Text style={styles.titulo}> Otro </Text>
          <TextInput
            placeholder="Otro"
            value={otro}
            onChangeText={(text) => setOtro(text)}
          />
        </View>
      )}
      <Button title="Mostrar acuifero guarani" onPress={() => setFormularioVisible(!formularioVisible)} />
      {formularioVisible && (
        <View>
          <Text style={styles.titulo}> Hora </Text>
          <TextInput
            placeholder="Hora"
            value={hora}
            onChangeText={(text) => setHora(text)}
          />
          <Text style={styles.titulo}> Oxígeno 19.5-22.5% </Text>
          <TextInput
            placeholder="Oxígeno"
            value={oxigeno}
            onChangeText={(text) => setOxigeno(text)}
          />
          <Text style={styles.titulo}> Combustible LEL .0% </Text>
          <TextInput
            placeholder="Combustible"
            value={combustible}
            onChangeText={(text) => setCombustible(text)}
          />
          <Text style={styles.titulo}> H2S </Text>
          <TextInput
            placeholder="H2S"
            value={h2s}
            onChangeText={(text) => setH2s(text)}
          />
          <Text style={styles.titulo}> Otro </Text>
          <TextInput
            placeholder="Otro"
            value={otro}
            onChangeText={(text) => setOtro(text)}
          />
        </View>
      )}
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
    
  );
}

export default Formulario;

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 22,
  },
  contenedor: {
    padding: 10,
  },
});
