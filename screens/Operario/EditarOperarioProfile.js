import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useUserContext } from '../../context/UserContext';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';

export default function EditarOperarioProfile({ navigation }) {
  const { user, setUser } = useUserContext();
  const [telefono, setTelefono] = useState(`${user.telefono || ''}`);
  const [dni, setDni] = useState(`${user.dni || ''}`);

  const handleGuardarCambios = async () => {
    try {
      const response = await fetch(`http://192.168.137.1:3001/login/${user.userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ telefono, dni }),
      });

      if (response.status === 200) {
        setUser({ ...user, telefono, dni });

        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Éxito',
          textBody: 'Perfil actualizado con éxito',
          button: 'Aceptar',
          closeOnOverlayTap: true,
        });

        console.log('Perfil actualizado con éxito');
        navigation.navigate('OperarioProfile');
      } else if (response.status === 401) {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'ERROR',
          textBody: 'Error al actualizar el perfil',
          button: 'Aceptar',
          closeOnOverlayTap: true,
        });

        console.error('Error al actualizar el perfil');
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'ERROR',
          textBody: 'Error desconocido',
          button: 'Aceptar',
          closeOnOverlayTap: true,
        });

        console.error('Error desconocido');
      }
    } catch (error) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'ERROR',
        textBody: 'Error de red',
        button: 'Aceptar',
        closeOnOverlayTap: true,
      });

      console.error('Error de red:', error);
    }
  };

  return (
    <View>
      <Text>Editar Perfil</Text>
      <Text>Nombre de Usuario: {user.nombre}</Text>
      <Text>Teléfono:</Text>
      <TextInput value={telefono} onChangeText={setTelefono} />
      <Text>DNI:</Text>
      <TextInput value={dni} onChangeText={setDni} />
      <Button title="Guardar Cambios" onPress={handleGuardarCambios} />
    </View>
  );
}
