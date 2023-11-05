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
import { Text, View } from 'react-native';
import { useUserContext } from '../../context/UserContext';
import LogoutButton from '../../components/LogoutButton';
import Boton from '../../components/boton';
import { OperarioStyles } from './OperarioStyles';

export default function Home({ navigation }) {
  const { user } = useUserContext();

  if (!user || user.role !== 'Operario') {
    return (
      <View style={OperarioStyles.container}>
        <Text>No tienes permisos para acceder a esta página.</Text>
      </View>
    );
  }

  return (
    <View style={OperarioStyles.container}>
      <View style={OperarioStyles.header}>
        <Text style={OperarioStyles.headerText}>¡Bienvenido Operario, {user.nombre}!</Text>
      </View>
      <View style={OperarioStyles.content}>
        <Text style={OperarioStyles.contentText}>Tu contenido aquí...</Text>
        <Boton text="Mi Perfil" apretame={() => navigation.navigate("Login")} />
        <Boton text="Formularios" apretame={() => navigation.navigate("FormScreen")} />
      </View>
      <LogoutButton />
    </View>
  );
}
