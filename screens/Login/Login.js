import React from 'react';
import { Button, TextInput, View, Image, Text } from 'react-native';
import { useUserContext } from '../../context/UserContext';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import { styles } from './LoginStyles'; // Importa el objeto de estilos

export default function Login() {
  const { setUser } = useUserContext();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const Ingresar = async () => {
    if (username.trim() === '' || password.trim() === '') {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Debe completar todos los campos',
        button: 'Aceptar',
        closeOnOverlayTap: true,
      });
      return;
    }

    const iniciarSesion = {
      username,
      password,
    };

    const respuesta = await fetch('http://192.168.0.89:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(iniciarSesion),
    });

    if (respuesta.status === 200) {
      const userData = await respuesta.json();

      console.log('Usuario ID:', userData.userId,userData.nombre); // Imprimir el ID del usuario
      // Realiza la autenticación y llama a setUser con la información del usuario
      setUser(userData);

      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Correcto',
        textBody: 'Iniciaste sesión',
        button: 'Aceptar',
        closeOnOverlayTap: true,
      });

      // Redirige al usuario según su rol
      if (userData.role === 'Operario') {
        navigation.navigate('OperarioScreen');
      } else if (userData.role === 'admin') {
        navigation.navigate('AdminDashboard');
      }
    } else if (respuesta.status === 401) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'ERROR',
        textBody: 'REVISE LOS CAMPOS',
        button: 'Aceptar',
        closeOnOverlayTap: true,
      });

      console.log(await respuesta.json());
    } else if (respuesta.status === 429) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'ESPERE',
        textBody: 'Espere 1 minuto para realizar más intentos',
        button: 'Aceptar',
        closeOnOverlayTap: true,
      });

      console.log(await respuesta.text());
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImagen}>
        <Image source={require('../../assets/Background_Circle.png')} style={styles.imagen}/>
      </View>
      <View style={styles.containerTitulo}>
        <Text style={styles.containerBienvenido}>
          Bienvenido
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#AAAAAA"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#AAAAAA"
        onChangeText={setPassword}
        value={password}
      />
      <Button
        title="Iniciar sesión"
        onPress={Ingresar}
      />
    </View>
  );
}
