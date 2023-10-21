import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const Prueba = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={[styles.view, {backgroundColor:"#0A0"}]}>
          <Text style={styles.text}>Vista 1</Text>
        </View>
        <View style={[styles.view, {backgroundColor:"#00A"}]}>
          <Text style={styles.text}>Vista 2</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"#A00"
  },
  view: {
    flex:0.4,
    backgroundColor: '#ddd',
    padding: 10,
    width:500
  },
  text: {
    fontSize: 20,
  },
});

export default Prueba;
