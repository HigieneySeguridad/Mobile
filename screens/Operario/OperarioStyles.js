import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.2,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 0.8,
    backgroundColor: 'white',
    padding: 20,
  },
  contentText: {
    fontSize: 24,
    color: '#007BFF',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  containerPerfil:{
    padding:10,
    marginLeft: 30,
    height: 200,
    width: 300,
    alignItems: 'center',
    marginBottom: 15,
    top: 50,
  },
  containerFormularios:{
    padding:10,
    marginLeft: 30,
    height: 200,
    width: 300,
    alignItems: 'center',
    marginBottom: 15,
    top: 80,
  },
  imagenperfil:{
    height: 180,
    width: 300,
    borderRadius: 10,
  },
  imagenformulario:{
    height: 180,
    width: 300,
    borderRadius: 10,
  }
});
