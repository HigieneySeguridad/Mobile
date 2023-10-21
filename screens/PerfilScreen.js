import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const PerfilScreen = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [imagenPerfil, setImagenPerfil] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Permiso denegado para acceder a la galería de imágenes.');
        }
      }
    })();
  }, []);

  const seleccionarImagen = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      // El usuario canceló la selección de la imagen
      return;
    }

    // En SDK 48 y posteriores, utiliza "assets" para acceder a la imagen seleccionada
    if (result.assets.length > 0) {
      const selectedImage = result.assets[0];
      setImagenPerfil(selectedImage.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {imagenPerfil && (
        <Image source={{ uri: imagenPerfil }} style={{ width: 200, height: 200, borderRadius: 100 }} />
      )}
      <TouchableOpacity onPress={seleccionarImagen}>
        <Text>Elegir foto de perfil</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ marginTop: 20, width: 200, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
        style={{ marginTop: 10, width: 200, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="DNI"
        value={dni}
        onChangeText={setDni}
        style={{ marginTop: 10, width: 200, borderWidth: 1, padding: 10 }}
      />
      <Button title="Guardar" onPress={() => guardarPerfil()} />
    </View>
  );
};

export default PerfilScreen;
