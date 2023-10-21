import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Boton from "./boton";

const ExampleFlexbox = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Encabezado</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Contenido</Text>
        <Boton text="Ir a Contador" apretame={() => navigation.navigate("Contador")}></Boton>
        <Boton text="Ir a Contador2" apretame={() => navigation.navigate("Contador2")}></Boton>
        
        <Boton text="volver a Flex" apretame={() => navigation.navigate("Flex")}></Boton>
      </View></View>
  );
};

const styles = StyleSheet.create({
    scroll:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"#CAC"
    },
  container: {
    flex: 1,
    backgroundColor: "#ACC",
  },
  header: {
    flex: 0.2,
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 0.8,
    backgroundColor: "#FFF",
    padding: 20,
  },
  contentText: {
    fontSize: 18,
  },
});

export default ExampleFlexbox;
