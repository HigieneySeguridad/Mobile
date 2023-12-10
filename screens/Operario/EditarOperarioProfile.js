import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useUserContext } from '../../context/UserContext';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import { styles } from '../../screens/Operario/EditarOperarioProfileStyles'

export default function EditarOperarioProfile({ navigation }) {
  const { user, setUser } = useUserContext();
  const [telefono, setTelefono] = useState(`${user.telefono || ''}`);
  const [dni, setDni] = useState(`${user.dni || ''}`);

  const handleGuardarCambios = async () => {
    try {
      const response = await fetch(`http://192.168.0.24:3000/login/${user.userId}`, {
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <View style={styles.ContPerfil}>
      <Text style={styles.TextPerfil}> Editar Perfil </Text>
      </View>
      <Text style={styles.PerfilUsuario}> Nombre de Usuario </Text>
      <Text style={styles.ContNombre}> {user.nombre} </Text>
      <Text style={styles.ContDNI}> DNI </Text>
      <TextInput style={styles.DNI} value={dni} onChangeText={setDni} />
      <Text style={styles.ContTelefono}> Nro Telefonico </Text>
      <TextInput style={styles.Telefono} value={telefono} onChangeText={setTelefono} />

      <TouchableOpacity style={styles.Btn1} onPress={handleGuardarCambios}>
       <Text style={styles.BtnText1}> Guardar </Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.Btn2} onPress={() => navigation.navigate('OperarioProfile')}>
        <Text style={styles.BtnText2}> Volver </Text>
      </TouchableOpacity>

    </View>
  );
}
