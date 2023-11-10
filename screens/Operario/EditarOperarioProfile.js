import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useUserContext } from '../../context/UserContext';

export default function EditarOperarioProfile({ navigation }) {
  const { user, setUser } = useUserContext(); // Asegúrate de que setUser esté disponible en el contexto
  const [nombre, setNombre] = useState(user.nombre);

  const handleGuardarCambios = async () => {
    try {
      // Realiza una solicitud PUT al servidor para actualizar el nombre del usuario
      const response = await fetch(`http://192.168.0.89:3001/login/${user.userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre }),
      });

      if (response.status === 200) {
        // Actualización exitosa, actualiza el nombre en el contexto de usuario
        setUser({ ...user, nombre }); // Actualiza el nombre en el estado del usuario
        console.log('Nombre actualizado con éxito');
        // Puedes mostrar un mensaje de éxito o realizar otras acciones
      } else {
        // Maneja errores aquí, muestra un mensaje de error o realiza otras acciones
        console.error('Error al actualizar el perfil');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <View>
      <Text>Editar Perfil</Text>
      <Text>Nombre de Usuario:</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
      />
      <Button title="Guardar Cambios" onPress={handleGuardarCambios} />
    </View>
  );
}
