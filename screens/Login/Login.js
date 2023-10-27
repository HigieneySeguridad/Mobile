/* import React, { useState } from "react";
import {  View,  TextInput } from "react-native";
import { styles } from "./LoginStyle";
import Boton from "../../components/boton"
import { useNavigation } from "@react-navigation/native";
import { ALERT_TYPE, Dialog} from 'react-native-alert-notification';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const Ingresar = async (e) => {
        e.preventDefault();

        if(username.trim()=== "" || password.trim()=== ""){
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: "Error",
                textBody: "Debe completar todos los campos",
                button: "Aceptar",
                closeOnOverlayTap: true,
                });
            }
        const iniciarSesion = {
            username,
            password
        }

        const respuesta = await fetch('http://192.168.137.1:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(iniciarSesion),
          });
        
          if (respuesta.status === 200) {
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Correcto",
                textBody: "Iniciaste sesion",
                button: "Aceptar",
                closeOnOverlayTap: true,
                });
            navigation.navigate("Home")// Redirigir al usuario solo cuando las credenciales son válidas
          } 
    
          if (respuesta.status ===401){
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: "ERROR",
                textBody: "REVISE LOS CAMPOS",
                button: "Aceptar",
                closeOnOverlayTap: true,
                });
           console.log(await respuesta.json())
          } 
          if (respuesta.status === 429){
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: "ESPERE",
                textBody: "Espere 1 minuto para realizar mas intentos",
                button: "Aceptar",
                closeOnOverlayTap: true,
                });
            console.log(await respuesta.text())
          }

    }
    
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor={"#AAAAAA"}
            onChangeText={setUsername}
            value={username}
            
            />
            <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor={"#AAAAAA"}
            onChangeText={setPassword}
            value={password}
            
            />
            <Boton text="Ingresar" apretame={Ingresar} />
         
        </View>
        )
    
    
}
export default Login; */

import React, { useState } from "react";
import {  View,  TextInput } from "react-native";
import { styles } from "./LoginStyle";
import Boton from "../../components/boton"
import { ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();


    const Ingresar = () => {
        if(usuario.trim()=== "" || password.trim()=== ""){
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: "Error",
                textBody: "Debe completar todos los campos",
                button: "Aceptar",
                closeOnOverlayTap: true,
                });

    } else {

        navigation.navigate("Home");
    }
           

    }
    
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor={"#AAAAAA"}
            onChangeText={setUsuario}
            value={usuario}
            
            />
            <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor={"#AAAAAA"}
            onChangeText={setPassword}
            value={password}
            
            />
            <Boton text="Ingresar" apretame={Ingresar} />
         
        </View>
        )
    
    
}
export default Login;