
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useUserContext } from '../context/UserContext';
import Login from '../screens/Login/Login'; 
import FormScreen from '../screens/FormScreen/FormScreen';
import AdminDashboard from '../screens/AdminDashboard';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import OperarioScreen from '../screens/Operario/OperarioScreen';
import Form1 from '../screens/Forms/Form1';
import Form2 from '../screens/Forms/Form2';
import Form3 from '../screens/Forms/Form3';
import Form4 from '../screens/Forms/Form4';

const Stack = createStackNavigator();

export const AppRouter = () => {

    const { user } = useUserContext();


  return (
    <AlertNotificationRoot>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="OperarioScreen" component={OperarioScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="FormScreen" component={FormScreen}/>
        <Stack.Screen name="Form1" component={Form1}/>
        <Stack.Screen name="Form2" component={Form2}/>
        <Stack.Screen name="Form3" component={Form3}/>
        <Stack.Screen name="Form4" component={Form4}/>
      </Stack.Navigator>
    </NavigationContainer>
    </AlertNotificationRoot>
    

  )
}
