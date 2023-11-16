
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useUserContext } from '../../context/UserContext';
import LogoutButton from '../../components/LogoutButton';
import Boton from '../../components/boton';
import { styles } from './OperarioStyles';

export default function Home({ navigation }) {
  const { user } = useUserContext();

  if (!user || user.role !== 'Operario') {
    return (
      <View style={styles.container}>
        <Text>No tienes permisos para acceder a esta página.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>¡Bienvenido Operario, {user.nombre}!</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Seleccione una opción</Text>
        <TouchableOpacity onPress={() => navigation.navigate("OperarioProfile")} style={styles.containerPerfil}>
          <Image source={require('../../assets/perfilnuevo.png')} style={styles.imagenperfil}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FormScreen")} style={styles.containerFormularios}>
          <Image source={require('../../assets/formularionuevo.png')} style={styles.imagenformulario}></Image>
        </TouchableOpacity>
      </View>
      <LogoutButton />
    </View>
  );
}
