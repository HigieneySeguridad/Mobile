
import React from 'react';
import { View, Text } from 'react-native';
import { useUserContext } from '../context/UserContext';
import LogoutButton from '../components/LogoutButton'; 


export default function AdminDashboard() {
  const { user } = useUserContext();

  return (
    <View>
      {user && user.role === 'admin' ? (
        <View>
          <Text>¡Bienvenido al Panel de Administración, {user.nombre}!</Text>
          <Text><LogoutButton /></Text>
        </View>
      ) : (
        <Text>No tienes permisos para acceder a esta página.</Text>
      )}
    </View>
  );
}

