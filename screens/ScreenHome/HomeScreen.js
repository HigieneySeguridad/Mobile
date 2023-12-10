import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from './HomeStyle';  

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerimagen} >
           <Image source={require('../../assets/home.png')} style={styles.imagen}></Image> 
        </View>
      <Text style={styles.title}> POLOSEG </Text>
      <View style={styles.boton}>
      <Button 
        title="Iniciar Sesion"
        onPress={() => navigation.navigate('Login')}
      />
      </View>
    </View>
  );
};

export default HomeScreen;
