import React, { useState, useRef } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

/* function Form4 ({onOK}) {
  const [hora, setHora] = useState('');
  const [oxigeno, setOxigeno] = useState('');
  const [combustible, setCombustible] = useState('');
  const [h2s, setH2s] = useState('');
  const [otro, setOtro] = useState('');
  const [form1, setForm1] = useState(false);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);
  const [form4, setForm4] = useState(false);
  const [form5, setForm5] = useState(false);
  const [form6, setForm6] = useState(false);


  const handleSubmit = () => {
    console.log('Hora:', hora);
    console.log('Oxígeno:', oxigeno);
    console.log('Combustible:', combustible);
    console.log('H2S:', h2s);
    console.log('Otro:', otro);
  };

const ref = useRef();

const handleOK = (signature) => {
  console.log(signature);
  onOK(signature);
};

const handleClear = () => {
  ref.current.clearSignature();
};

const handleConfirm = () => {
  console.log("end");
  ref.current.readSignature();
};

const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;





  return (
    <View style={styles.contenedor}>
      <Button title="Mostrar acuifero guarani" onPress={() => setForm1(!form1)} />
      {form1 && (
        <View style={styles.container}>
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
          <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
          <View style={styles.row}>
        <Button title="Clear" onPress={handleClear} />
        <Button title="Confirm" onPress={handleConfirm} />
      </View>
        </View>
      )}
      <Button title="Mostrar acuifero guarani" onPress={() => setForm2(!form2)} />
      {form2 && (
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
      <Button title="Mostrar acuifero guarani" onPress={() => setForm3(!form3)} />
      {form3 && (
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
      <Button title="Mostrar acuifero guarani" onPress={() => setForm4(!form4)} />
      {form4 && (
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
      <Button title="Mostrar acuifero guarani" onPress={() => setForm5(!form5)} />
      {form5 && (
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
      <Button title="Mostrar acuifero guarani" onPress={() => setForm6(!form6)} />
      {form6 && (
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
      <View style={styles.container}>
      <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
      <View style={styles.row}>
        <Button title="Clear" onPress={handleClear} />
        <Button title="Confirm" onPress={handleConfirm} />
      </View>
    </View>
    </View>
    
  );
}

export default Form4;
 */
const Form4 = ({ onOK }) => {
  const [hora, setHora] = useState('');
  const [oxigeno, setOxigeno] = useState('');
  const [combustible, setCombustible] = useState('');
  const [h2s, setH2s] = useState('');
  const [otro, setOtro] = useState('');
  const [form1, setForm1] = useState(false);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);
  const [form4, setForm4] = useState(false);
  const [form5, setForm5] = useState(false);
  const [form6, setForm6] = useState(false);


  const handleSubmit = () => {
    console.log('Hora:', hora);
    console.log('Oxígeno:', oxigeno);
    console.log('Combustible:', combustible);
    console.log('H2S:', h2s);
    console.log('Otro:', otro);
  };

const ref = useRef();

const handleOK = (signature) => {
  console.log(signature);
  onOK(signature);
};

const handleClear = () => {
  ref.current.clearSignature();
};

const handleConfirm = () => {
  console.log("end");
  ref.current.readSignature();
};

const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;

  return (
<>
<Button title="Mostrar acuifero guarani" onPress={() => setForm1(!form1)} />     
{form1 &&(
    <View style={styles.container}>
      <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
      <View style={styles.row}>
        <Button title="Clear" onPress={handleClear} />
        <Button title="Confirm" onPress={handleConfirm} />
      </View>
    </View>
    )}
    </>
    
  );
}


export default Form4;



const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 22,
  },
  contenedor: {
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    padding: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
});