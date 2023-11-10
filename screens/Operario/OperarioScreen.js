
import React from 'react';
import { Text, View, Image, } from 'react-native';
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
        <View style={styles.containerPerfil}>
          <Image source={require('../../assets/perfil.png')} style={styles.imagenperfil}></Image> 
        </View>
        <Boton text="Mi Perfil" apretame={() => navigation.navigate("OperarioProfile")} />
        <View style={styles.containerFormularios}>
          <Image source={require('../../assets/formulario.png')}></Image> 
        </View>
        <Boton text="Formularios" apretame={() => navigation.navigate("FormScreen")} />
      </View>
      <LogoutButton />
    </View>
  );
}
