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