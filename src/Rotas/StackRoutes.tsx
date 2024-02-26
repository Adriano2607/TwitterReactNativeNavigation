
import LoginScreen from "../screens/TelaLogin";
import ErrorScreen from "../screens/TelaErro";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerRoutes } from "./DrawerRoutes";
import { StackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<StackParamList>();

const StackRoutes  = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:'white'}
    }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{title:'Adriano'}} />
      <Stack.Screen name="Success" component={DrawerRoutes} options={{headerShown:false}}  />
      <Stack.Screen name="Error" component={ErrorScreen} options={{headerTintColor:'red',statusBarColor:'red'}}/>
    </Stack.Navigator>
  );
};

export default StackRoutes ;