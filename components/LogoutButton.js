import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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
    <View style={styles.btnText} >
      <TouchableOpacity title="Cerrar sesión" onPress={handleLogout}> 
      <Text style={styles.textstyle}>Cerrar sesíon</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
    btnText: {
      backgroundColor: '#007BFF',
      padding: 10,
      margin: 15,
      borderRadius: 10,
      width: 150,
      marginLeft: 126.2,
    },
    textstyle:{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center', 
    }
  });

export default LogoutButton;
