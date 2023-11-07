/* 
import React from 'react';
import { Text } from 'react-native';
import { useUserContext } from '../../context/UserContext';
import LogoutButton from '../../components/LogoutButton';
import Boton from '../../components/boton';
import { Container,Header,ContentText,HeaderText,Content } from './OperarioStyles';
 // Importa los estilos de Home

export default function Home({ navigation }) {
  const { user } = useUserContext();

  if (!user || user.role !== 'Operario') {
    return (
      <Container>
        <Text>No tienes permisos para acceder a esta página.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderText>¡Bienvenido Operario, {user.nombre}!</HeaderText>
      </Header>
      <Content>
        <ContentText></ContentText>
        <Boton text="Mi Perfil" apretame={() => navigation.navigate("Login")} />
        <Boton text="Formularios" apretame={() => navigation.navigate("FormScreen")} />
      </Content>
      <LogoutButton />
    </Container>
  );
}
 
 */
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
        <Boton text="Mi Perfil" apretame={() => navigation.navigate("Login")} />
        <View style={styles.containerFormularios}>
          <Image source={require('../../assets/formulario.png')}></Image> 
        </View>
        <Boton text="Formularios" apretame={() => navigation.navigate("FormScreen")} />
      </View>
      <LogoutButton />
    </View>
  );
}
