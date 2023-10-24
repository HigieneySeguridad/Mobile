import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login/Login";
import Home from "./screens/Home";
import PerfilScreen from "./screens/PerfilScreen";
import DropdownScreen from "./screens/DropdownScreen";
import Formulario1Screen from "./screens/Forms/Formulario1Screen";
import Formulario2Screen from "./screens/Forms/Formulario2Screen";
import Formulario3Screen from "./screens/Forms/Formulario3Screen"
import { AlertNotificationRoot } from "react-native-alert-notification";

export default function App() {

const Stack = createNativeStackNavigator();
  return(<>
    <StatusBar style="auto" />
    <AlertNotificationRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
          <Stack.Screen name="DropdownScreen" component={DropdownScreen} />
          <Stack.Screen name="Formulario1Screen" component={Formulario1Screen} />
          <Stack.Screen name="Formulario2Screen" component={Formulario2Screen} />
          <Stack.Screen name="Formulario3Screen" component={Formulario3Screen} />

        </Stack.Navigator>
      </NavigationContainer>
    
    </AlertNotificationRoot>
    </>

  )



  
}
