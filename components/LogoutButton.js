import React from 'react';
import { Button } from 'react-native';
import { useUserContext } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';

const LogoutButton = () => {
  const { user, logout } = useUserContext();
  const navigation = useNavigation();

  const handleLogout = () => {
    logout();
    // Redirigir al usuario a la pantalla adecuada según su rol
   
      // Redirigir a la pantalla de inicio de sesión (por ejemplo, 'Login')
      navigation.navigate('Login');
    
  };

  return (
    <Button title="Cerrar sesión" onPress={handleLogout} />
  );
};

export default LogoutButton;
