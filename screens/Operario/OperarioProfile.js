import React from 'react';
import { View, Text, Button } from 'react-native';
import { useUserContext } from '../../context/UserContext';
import { useNavigation } from '@react-navigation/native';

export default function PerfilScreen() {
  const { user } = useUserContext();
  const navigation = useNavigation();

 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil de Usuario</Text>
      <Text>Nombre de Usuario: {user.nombre}</Text>
      <Text>DNI: {user.dni}</Text>
      <Text>Nro Telefonico: {user.telefono}</Text>
      
      <Button title="Editar" onPress={() => navigation.navigate('EditarOperarioProfile')} />

    </View>
  );
}
