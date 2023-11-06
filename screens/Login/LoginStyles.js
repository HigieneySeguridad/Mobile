import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: 130,
    height: 60,
    borderRadius: 5,
    marginVertical: 10,
    borderColor: '#007BFF',
    fontSize: 16,
    color: '#333',
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#333',
  },
  imagen:{
    width: 395,
    height:450,
  },
  containerImagen:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop: -225,
  },
  containerTitulo:{
    top: -250,
  },
  containerBienvenido:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  }
});
