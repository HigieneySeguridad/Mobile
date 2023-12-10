import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useUserContext } from '../../context/UserContext';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../screens/Operario/OperarioProfileStyle';


export default function PerfilScreen() {
  const { user } = useUserContext();
  const navigation = useNavigation();

 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <View style={styles.ContPerfil}>
      <Text style={styles.PerfilUsuario}>Información de Perfil</Text>
      </View>
      <Text style={styles.ContUsuario}>Nombre de Usuario</Text>
      <Text style={styles.UsuarioNombre}>{user.nombre}</Text>
      <Text style={styles.ContDNI}>DNI</Text>
      <Text style={styles.DNI}>{user.dni}</Text>
      <Text style={styles.ContNro}>Nro Telefonico</Text>
      <Text style={styles.Nro}>{user.telefono}</Text>
      
      <TouchableOpacity style={styles.Btn1} onPress={() => navigation.navigate('EditarOperarioProfile')}>
       <Text style={styles.BtnText1}> Editar </Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.Btn2} onPress={() => navigation.navigate('OperarioScreen')}>
        <Text style={styles.BtnText2}> Volver </Text>
      </TouchableOpacity>
     

    </View>
  );
}
