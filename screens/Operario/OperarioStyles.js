import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
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
    marginLeft: 22,
  },
  containerFormularios:{
    padding:10,
    marginLeft: 22,
  },
});
