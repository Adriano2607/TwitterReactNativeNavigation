
import LoginScreen from "../screens/TelaLogin";
import ErrorScreen from "../screens/TelaErro";
import TabNavigation from "./TabRoute"; 

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerRoutes } from "./DrawerRoutes";

const Stack = createNativeStackNavigator();

const StackRoutes  = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:'white'}
    }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{title:'Tudo Nosso'}} />
      <Stack.Screen name="Success" component={DrawerRoutes} options={{headerShown:false}}  />
      <Stack.Screen name="Error" component={ErrorScreen} options={{headerTintColor:'red',statusBarColor:'red'}}/>
    </Stack.Navigator>
  );
};

export default StackRoutes ;