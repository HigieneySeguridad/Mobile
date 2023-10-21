import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Boton({ apretame, text="Boton" }) {

  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={apretame}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: "#FFF",
  },
  btn: {
    backgroundColor: "#0000FF",
    color: "#FFF",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
});
